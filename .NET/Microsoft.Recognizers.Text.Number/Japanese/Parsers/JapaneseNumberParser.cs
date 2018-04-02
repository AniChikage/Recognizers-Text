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


            Console.WriteLine("extra: " + extra);


            if (extra == null)
            {
                return null;
            }

            if (extra.Contains("Ordinal"))
            {
                ret = OrdParseJpn(getExtResultJpn);
                Console.WriteLine("Ordinal: ");
            }
            else if (extra.Contains("Per"))
            {
                ret = PerParseJpn(getExtResultJpn);
                Console.WriteLine("Per: ");
            }

            if (ret != null)
            {
                ret.Text = extResultJpn.Text;
            }

            return ret;
        }

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

        private string ReplaceTraWithSim(string text)
        {
            if (string.IsNullOrWhiteSpace(text))
            {
                return text;
            }

            var builder = new StringBuilder();
            foreach (char c in text)
            {
                builder.Append(Config.TratoSimMapJpn.ContainsKey(c) ? Config.TratoSimMapJpn[c] : c);
            }
            return builder.ToString();
        }

        protected ParseResult FracParseJpn(ExtractResult extResultJpn)
        {
            var result = new ParseResult
            {
                Start = extResultJpn.Start,
                Length = extResultJpn.Length,
                Text = extResultJpn.Text,
                Type = extResultJpn.Type
            };

            var resultText = extResultJpn.Text;
            var splitResult = Config.FracSplitRegex.Split(resultText);
            string intPart = "", demoPart = "", numPart = "";
            if (splitResult.Length == 3)
            {
                intPart = splitResult[0];
                demoPart = splitResult[1];
                numPart = splitResult[2];
            }
            else
            {
                intPart = "零";
                demoPart = splitResult[0];
                numPart = splitResult[1];
            }

            var intValue = Config.DigitNumRegex.IsMatch(intPart)
                ? GetDigitValueJpn(intPart, 1.0)
                : GetIntValueJpn(intPart);

            var numValue = Config.DigitNumRegex.IsMatch(numPart)
                ? GetDigitValueJpn(numPart, 1.0)
                : GetIntValueJpn(numPart);

            var demoValue = Config.DigitNumRegex.IsMatch(demoPart)
                ? GetDigitValueJpn(demoPart, 1.0)
                : GetIntValueJpn(demoPart);

            if (Config.NegativeNumberSignRegex.IsMatch(intPart))
            {
                result.Value = intValue - numValue / demoValue;
            }
            else
            {
                result.Value = intValue + numValue / demoValue;
            }

            result.ResolutionStr = result.Value.ToString();
            return result;
        }

        protected ParseResult DouParseJpn(ExtractResult extResultJpn)
        {
            var result = new ParseResult
            {
                Start = extResultJpn.Start,
                Length = extResultJpn.Length,
                Text = extResultJpn.Text,
                Type = extResultJpn.Type
            };

            var resultText = extResultJpn.Text;

            if (Config.DoubleAndRoundJpnRegex.IsMatch(resultText))
            {
                resultText = ReplaceUnit(resultText);
                result.Value = GetDigitValueJpn(resultText.Substring(0, resultText.Length - 1),
                    Config.RoundNumberMapJpn[resultText[resultText.Length - 1]]);
            }
            else
            {
                resultText = ReplaceUnit(resultText);
                var splitResult = Config.PointRegexJpn.Split(resultText);

                if (splitResult[0] == "")
                {
                    splitResult[0] = "零";
                }

                if (Config.NegativeNumberSignRegex.IsMatch(splitResult[0]))
                {
                    result.Value = GetIntValueJpn(splitResult[0]) - GetPointValue(splitResult[1]);
                }
                else
                {
                    result.Value = GetIntValueJpn(splitResult[0]) + GetPointValue(splitResult[1]);
                }
            }

            result.ResolutionStr = result.Value.ToString();
            return result;
        }

        private string ReplaceUnit(string resultText)
        {
            foreach (var unit in Config.UnitMapJpn.Keys)
            {
                resultText = resultText.Replace(unit, Config.UnitMapJpn[unit]);
            }
            return resultText;
        }

        protected ParseResult IntParseJpn(ExtractResult extResultJpn)
        {
            var result = new ParseResult
            {
                Start = extResultJpn.Start,
                Length = extResultJpn.Length,
                Text = extResultJpn.Text,
                Type = extResultJpn.Type,
                Value = GetIntValueJpn(extResultJpn.Text)
            };

            result.ResolutionStr = result.Value.ToString();
            return result;
        }

        protected ParseResult PerParseJpn(ExtractResult extResultJpn)
        {
            var result = new ParseResult
            {
                Start = extResultJpn.Start,
                Length = extResultJpn.Length,
                Text = extResultJpn.Text,
                Type = extResultJpn.Type
            };

            Console.WriteLine("per: " + result.Text);

            var resultText = extResultJpn.Text;
            long power = 1;

            if (extResultJpn.Data.ToString().Contains("Spe"))
            {
                resultText = ReplaceFullWithHalf(resultText);
                resultText = ReplaceUnit(resultText);

                if (resultText == "半折")
                {
                    result.Value = 50;
                }
                else if (resultText == "10成")
                {
                    result.Value = 100;
                }
                else
                {
                    var matches = Config.SpeGetNumberRegex.Matches(resultText);
                    double intNumber;

                    if (matches.Count == 2)
                    {
                        var intNumberChar = matches[0].Value[0];

                        if (intNumberChar == '对')
                        {
                            intNumber = 5;
                        }
                        else if (intNumberChar == '十' || intNumberChar == '拾')
                        {
                            intNumber = 10;
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
                        else if (intNumberChar == '十' || intNumberChar == '拾')
                        {
                            intNumber = 10;
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

                Console.WriteLine("num doubleText: " + doubleText);

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

                result.Value = GetDigitValueJpn(resultText, power);
            }
            else
            {
                var doubleText = Config.PercentageRegex.Match(resultText).Value;

                Console.WriteLine("doubleText: " + doubleText);

                doubleText = ReplaceUnit(doubleText);

                var splitResult = Config.PointRegexJpn.Split(doubleText);
                Console.WriteLine("splitResult: " + splitResult);
                if (splitResult[0] == "")
                {
                    splitResult[0] = "零";
                }

                var doubleValue = GetIntValueJpn(splitResult[0]);
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

        protected ParseResult OrdParseJpn(ExtractResult extResultJpn)
        {
            var result = new ParseResult
            {
                Start = extResultJpn.Start,
                Length = extResultJpn.Length,
                Text = extResultJpn.Text,
                Type = extResultJpn.Type
            };

            Console.WriteLine(result.Start + "," + result.Length + "," + result.Text + "," + result.Type);

            var resultText = extResultJpn.Text;
            resultText = resultText.Substring(1);

            Console.WriteLine(resultText.ToString());

            Console.WriteLine("match: " + Config.DigitNumRegex.IsMatch(resultText));

            result.Value = Config.DigitNumRegex.IsMatch(resultText)
                ? GetDigitValueJpn(resultText, 1)
                : GetIntValueJpn(resultText);
            Console.WriteLine(result.Value);
            result.ResolutionStr = result.Value.ToString();
            return result;
        }

        private double GetDigitValueJpn(string intStr, double power)
        {
            var isNegative = false;
            if (Config.NegativeNumberSignRegex.IsMatch(intStr))
            {
                isNegative = true;
                intStr = intStr.Substring(1);
            }
            Console.WriteLine("intStr" + intStr);
            intStr = ReplaceFullWithHalf(intStr);
            Console.WriteLine("intStr" + intStr);
            var intValue = GetDigitalValue(intStr, power);
            if (isNegative)
            {
                intValue = -intValue;
            }

            return intValue;
        }

        private double GetIntValueJpn(string intStr)
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
