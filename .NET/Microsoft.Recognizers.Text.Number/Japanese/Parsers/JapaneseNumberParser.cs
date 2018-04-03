using System;
using System.Collections.Generic;
using System.Text;

namespace Microsoft.Recognizers.Text.Number.Japanese
{
    public class JapaneseNumberParser : BaseNumberParser
    {
        protected new readonly JapaneseNumberParserConfiguration Config;

        public JapaneseNumberParser(JapaneseNumberParserConfiguration config) : base(config)
        {
            this.Config = config;
        }

        public override ParseResult Parse(ExtractResult extResultJpn)
        {
            string extra = null;
            ParseResult ret = null;
            extra = extResultJpn.Data as string;

            var getExtResultJpn = new ExtractResult()
            {
                Start = extResultJpn.Start,
                Length = extResultJpn.Length,
                Data = extResultJpn.Data,
                Text = extResultJpn.Text,
                Type = extResultJpn.Type
            };
            
            if (extra == null)
            {
                return null;
            }

            if (extra.Contains("Ordinal"))
            {
                ret = OrdParse(getExtResultJpn);
            }
            else if (extra.Contains("Per"))
            {
                ret = PerParse(getExtResultJpn);
            }

            if (ret != null)
            {
                ret.Text = extResultJpn.Text;
            }

            return ret;
        }

        // Replace full digtal numbers with half digtal numbers. "４" and "4" are both legal in Japanese, replace "４" with "4", then deal with "4"
        private string ReplaceFullWithHalf(string text)
        {
            if (string.IsNullOrWhiteSpace(text))
            {
                return text;
            }

            var builder = new StringBuilder();
            foreach (char c in text)
            {
                builder.Append(Config.FullToHalfMapJpn.ContainsKey(c) ? Config.FullToHalfMapJpn[c] : c);
            }
            return builder.ToString();
        }

        // Parse Japanese unit phrase. "万", "億",...
        private string ReplaceUnit(string resultText)
        {
            foreach (var unit in Config.UnitMapJpn.Keys)
            {
                resultText = resultText.Replace(unit, Config.UnitMapJpn[unit]);
            }

            return resultText;
        }

        // Parse Japanese percentage phrase. 
        protected ParseResult PerParse(ExtractResult extResultJpn)
        {
            var result = new ParseResult
            {
                Start = extResultJpn.Start,
                Length = extResultJpn.Length,
                Text = extResultJpn.Text,
                Type = extResultJpn.Type
            };

            var resultText = extResultJpn.Text;
            long power = 1;

            if (extResultJpn.Data.ToString().Contains("Spe"))
            {
                resultText = ReplaceFullWithHalf(resultText);
                resultText = ReplaceUnit(resultText);

                if (resultText == "半額" || resultText == "半値")
                {
                    result.Value = 50;
                }
                else
                {
                    var matches = Config.SpeGetNumberRegex.Matches(resultText);
                    double intNumber;

                    if (matches.Count == 2)
                    {
                        var intNumberChar = matches[0].Value[0];

                        if (intNumberChar == '対')
                        {
                            intNumber = 5;
                        }
                        else
                        {
                            intNumber = Config.ZeroToNineMapJpn[intNumberChar];
                        }

                        var pointNumberChar = matches[1].Value[0];
                        double pointNumber;
                        if (pointNumberChar == '半')
                        {
                            pointNumber = 0.5;
                        }
                        else
                        {
                            pointNumber = Config.ZeroToNineMapJpn[pointNumberChar] * 0.1;
                        }

                        result.Value = (intNumber + pointNumber) * 10;
                    }
                    else
                    {
                        var intNumberChar = matches[0].Value[0];

                        if (intNumberChar == '对')
                        {
                            intNumber = 5;
                        }
                        else
                        {
                            intNumber = Config.ZeroToNineMapJpn[intNumberChar];
                        }

                        result.Value = intNumber * 10;
                    }
                }
            }
            else if (extResultJpn.Data.ToString().Contains("Num"))
            {
                var doubleText = Config.PercentageRegex.Match(resultText).Value;

                if (doubleText.Contains("k") || doubleText.Contains("K") || doubleText.Contains("ｋ") ||
                    doubleText.Contains("Ｋ"))
                {
                    power = 1000;
                }

                if (doubleText.Contains("M") || doubleText.Contains("Ｍ"))
                {
                    power = 1000000;
                }

                if (doubleText.Contains("G") || doubleText.Contains("Ｇ"))
                {
                    power = 1000000000;
                }

                if (doubleText.Contains("T") || doubleText.Contains("Ｔ"))
                {
                    power = 1000000000000;
                }

                result.Value = GetDigitValue(resultText, power);
            }
            else
            {
                var doubleText = Config.PercentageRegex.Match(resultText).Value;
                doubleText = ReplaceUnit(doubleText);

                var splitResult = Config.PointRegexJpn.Split(doubleText);
                if (splitResult[0] == "")
                {
                    splitResult[0] = "零";
                }

                var doubleValue = GetIntValue(splitResult[0]);
                if (splitResult.Length == 2)
                {
                    if (Config.NegativeNumberSignRegex.IsMatch(splitResult[0]))
                    {
                        doubleValue -= GetPointValue(splitResult[1]);
                    }
                    else
                    {
                        doubleValue += GetPointValue(splitResult[1]);
                    }
                }

                result.Value = doubleValue;
            }

            result.ResolutionStr = result.Value + @"%";
            return result;
        }

        protected ParseResult OrdParse(ExtractResult extResultJpn)
        {
            var result = new ParseResult
            {
                Start = extResultJpn.Start,
                Length = extResultJpn.Length,
                Text = extResultJpn.Text,
                Type = extResultJpn.Type
            };

            var resultText = extResultJpn.Text;
            resultText = resultText.Substring(1);

            result.Value = Config.DigitNumRegex.IsMatch(resultText)
                ? GetDigitValue(resultText, 1)
                : GetIntValue(resultText);
            result.ResolutionStr = result.Value.ToString();

            return result;
        }

        private double GetDigitValue(string intStr, double power)
        {
            var isNegative = false;

            if (Config.NegativeNumberSignRegex.IsMatch(intStr))
            {
                isNegative = true;
                intStr = intStr.Substring(1);
            }

            intStr = ReplaceFullWithHalf(intStr);
            var intValue = GetDigitalValue(intStr, power);
            if (isNegative)
            {
                intValue = -intValue;
            }

            return intValue;
        }

        private double GetIntValue(string intStr)
        {
            intStr = ReplaceUnit(intStr);
            double intValue = 0, partValue = 0, beforeValue = 1;
            var isRoundBefore = false;
            long roundBefore = -1, roundDefault = 1;
            var isNegative = false;

            if (Config.NegativeNumberSignRegex.IsMatch(intStr))
            {
                isNegative = true;
                intStr = intStr.Substring(1);
            }

            for (var i = 0; i < intStr.Length; i++)
            {
                if (Config.RoundNumberMapJpn.ContainsKey(intStr[i]))
                {

                    var roundRecent = Config.RoundNumberMapJpn[intStr[i]];
                    if (roundBefore != -1 && roundRecent > roundBefore)
                    {
                        if (isRoundBefore)
                        {
                            intValue += partValue * roundRecent;
                            isRoundBefore = false;
                        }
                        else
                        {
                            partValue += beforeValue * roundDefault;
                            intValue += partValue * roundRecent;
                        }
                        roundBefore = -1;
                        partValue = 0;
                    }
                    else
                    {
                        isRoundBefore = true;
                        partValue += beforeValue * roundRecent;
                        roundBefore = roundRecent;

                        if (i == intStr.Length - 1 || Config.RoundDirectListJpn.Contains(intStr[i]))
                        {
                            intValue += partValue;
                            partValue = 0;
                        }
                    }

                    roundDefault = roundRecent / 10;
                }
                else if (Config.ZeroToNineMapJpn.ContainsKey(intStr[i]))
                {
                    if (i != intStr.Length - 1)
                    {
                        if (intStr[i] == '零' && !Config.RoundNumberMapJpn.ContainsKey(intStr[i + 1]))
                        {
                            beforeValue = 1;
                            roundDefault = 1;
                        }
                        else
                        {
                            beforeValue = Config.ZeroToNineMapJpn[intStr[i]];
                            isRoundBefore = false;
                        }
                    }
                    else
                    {
                        partValue += Config.ZeroToNineMapJpn[intStr[i]] * roundDefault;
                        intValue += partValue;
                        partValue = 0;
                    }
                }
            }

            if (isNegative)
            {
                intValue = -intValue;
            }

            return intValue;
        }

        private double GetPointValue(string pointStr)
        {
            double pointValue = 0;
            var scale = 0.1;
            foreach (char c in pointStr)
            {
                pointValue += scale * Config.ZeroToNineMapJpn[c];
                scale *= 0.1;
            }
            return pointValue;
        }
    }
}