using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;

using Microsoft.Recognizers.Definitions.Japanese;

namespace Microsoft.Recognizers.Text.Number.Japanese
{
    public class JapaneseNumberParserConfiguration : INumberParserConfiguration
    {
        public JapaneseNumberParserConfiguration() : this(new CultureInfo(Culture.Japanese))
        {
        }

        public JapaneseNumberParserConfiguration(CultureInfo ci)
        {
            LangMarker = NumbersDefinitions.LangMarker;
            CultureInfo = ci;

            DecimalSeparatorChar = NumbersDefinitions.DecimalSeparatorChar;
            FractionMarkerToken = NumbersDefinitions.FractionMarkerToken;
            NonDecimalSeparatorChar = NumbersDefinitions.NonDecimalSeparatorChar;
            HalfADozenText = NumbersDefinitions.HalfADozenText;
            WordSeparatorToken = NumbersDefinitions.WordSeparatorToken;

            WrittenDecimalSeparatorTexts = Enumerable.Empty<string>();
            WrittenGroupSeparatorTexts = Enumerable.Empty<string>();
            WrittenIntegerSeparatorTexts = Enumerable.Empty<string>();
            WrittenFractionSeparatorTexts = Enumerable.Empty<string>();

            CardinalNumberMap = new Dictionary<string, long>().ToImmutableDictionary();
            OrdinalNumberMap = new Dictionary<string, long>().ToImmutableDictionary();
            RoundNumberMap = NumbersDefinitions.RoundNumberMap.ToImmutableDictionary();
            ZeroToNineMapJpn = NumbersDefinitions.ZeroToNineMapJpn.ToImmutableDictionary();
            RoundNumberMapJpn = NumbersDefinitions.RoundNumberMapJpn.ToImmutableDictionary();
            FullToHalfMapJpn = NumbersDefinitions.FullToHalfMapJpn.ToImmutableDictionary();
            UnitMapJpn = NumbersDefinitions.UnitMapJpn.ToImmutableDictionary();
            RoundDirectListJpn = NumbersDefinitions.RoundDirectListJpn.ToImmutableList();

            HalfADozenRegex = null;
            PointRegexJpn = new Regex(NumbersDefinitions.PointRegexJpn, RegexOptions.IgnoreCase | RegexOptions.Singleline);
            DigitNumRegex = new Regex(NumbersDefinitions.DigitNumRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);
            NegativeNumberSignRegex = new Regex(NumbersDefinitions.NegativeNumberSignRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);
            PercentageRegex = new Regex(NumbersDefinitions.PercentageRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);
        }

        public CultureInfo CultureInfo { get; private set; }

        public char DecimalSeparatorChar { get; private set; }

        public Regex DigitalNumberRegex { get; private set; }

        public string FractionMarkerToken { get; private set; }

        public Regex HalfADozenRegex { get; private set; }

        public string HalfADozenText { get; private set; }

        public string LangMarker { get; private set; }

        public char NonDecimalSeparatorChar { get; private set; }

        public string NonDecimalSeparatorText { get; private set; }

        public Regex DigitNumRegex { get; private set; }

        public Regex DozenRegex { get; private set; }

        public Regex PercentageRegex { get; private set; }

        public Regex DoubleAndRoundJpnRegex { get; private set; }

        public Regex FracSplitRegex { get; private set; }

        public Regex NegativeNumberSignRegex { get; private set; }

        public Regex PointRegexJpn { get; private set; }

        public Regex SpeGetNumberRegex { get; private set; }

        public Regex PairRegex { get; private set; }

        public ImmutableDictionary<string, long> OrdinalNumberMap { get; private set; }

        public ImmutableDictionary<string, long> CardinalNumberMap { get; private set; }

        public ImmutableDictionary<string, long> RoundNumberMap { get; private set; }

        public ImmutableDictionary<char, double> ZeroToNineMapJpn { get; private set; }

        public ImmutableDictionary<char, long> RoundNumberMapJpn { get; private set; }

        public ImmutableDictionary<char, char> FullToHalfMapJpn { get; private set; }

        public ImmutableDictionary<string, string> UnitMapJpn { get; private set; }

        public ImmutableDictionary<char, char> TratoSimMapJpn { get; private set; }

        public ImmutableList<char> RoundDirectListJpn { get; private set; }

        public string WordSeparatorToken { get; private set; }

        public IEnumerable<string> WrittenDecimalSeparatorTexts { get; private set; }

        public IEnumerable<string> WrittenGroupSeparatorTexts { get; private set; }

        public IEnumerable<string> WrittenIntegerSeparatorTexts { get; private set; }

        public IEnumerable<string> WrittenFractionSeparatorTexts { get; private set; }

        public IEnumerable<string> NormalizeTokenSet(IEnumerable<string> tokens, ParseResult context)
        {
            return tokens;
        }

        public long ResolveCompositeNumber(string numberStr)
        {
            return 0;
        }
    }
}
