using System.Collections.Generic;
using System.Collections.Immutable;
using System.Text.RegularExpressions;

using Microsoft.Recognizers.Definitions.Japanese;

namespace Microsoft.Recognizers.Text.Number.Japanese
{
    public class PercentageExtractor : BaseNumberExtractor
    {
        internal sealed override ImmutableDictionary<Regex, string> Regexes { get; }

        protected sealed override string ExtractType { get; } = Constants.SYS_NUM_PERCENTAGE;

        public PercentageExtractor()
        {
            var regexes = new Dictionary<Regex, string>()
            {
                {
                    //百分之五十  百分之一点五
                    new Regex(NumbersDefinitions.SimplePercentageRegex, RegexOptions.Singleline),
                              "PerJpn"
                },
                {
                    //百分之５６.２　百分之１２
                    new Regex(NumbersDefinitions.NumbersPercentagePointRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline),
                              "PerNum"
                }
            };

            Regexes = regexes.ToImmutableDictionary();
        }
    }
}
