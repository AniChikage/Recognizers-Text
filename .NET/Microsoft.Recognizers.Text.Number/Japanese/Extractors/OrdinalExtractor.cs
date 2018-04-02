using System.Collections.Generic;
using System.Collections.Immutable;
using System.Text.RegularExpressions;

using Microsoft.Recognizers.Definitions.Japanese;

namespace Microsoft.Recognizers.Text.Number.Japanese
{
    public class OrdinalExtractor : BaseNumberExtractor
    {
        internal sealed override ImmutableDictionary<Regex, string> Regexes { get; }

        protected sealed override string ExtractType { get; } = Constants.SYS_NUM_ORDINAL;

        public OrdinalExtractor()
        {
            var regexes = new Dictionary<Regex, string>
            {
                {
                    //だい一百五十四
                    new Regex(NumbersDefinitions.OrdinalRegexJpn, RegexOptions.Singleline)
                    , "OrdinalJpn"
                },
                {
                    //だい２５６５
                    new Regex(NumbersDefinitions.OrdinalNumbersRegex, RegexOptions.Singleline)
                    , "OrdinalJpn"
                },
                {
                    //だい1234
                    new Regex(NumbersDefinitions.RoundNumberIntegerRegexJpn, RegexOptions.Singleline)
                    , "OrdinalJpn"
                }
            };

            Regexes = regexes.ToImmutableDictionary();
        }
    }
}
