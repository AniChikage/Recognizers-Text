// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

import { BaseNumbers } from "./baseNumbers";
export namespace EnglishNumericWithUnit {
	export const AgeSuffixList: ReadonlyMap<string, string> = new Map<string, string>([["Year", "years old|year old|year-old|years-old|-year-old|-years-old|years of age|year of age"],["Month", "months old|month old|month-old|months-old|-month-old|-months-old|month of age|months of age"],["Week", "weeks old|week old|week-old|weeks-old|-week-old|-weeks-old|week of age|weeks of age"],["Day", "days old|day old|day-old|days-old|-day-old|-days-old|day of age|days of age"]]);
	export const AreaSuffixList: ReadonlyMap<string, string> = new Map<string, string>([["Square kilometer", "sq km|sq kilometer|sq kilometre|sq kilometers|sq kilometres|square kilometer|square kilometre|square kilometers|square kilometres|km2|km^2|km²"],["Square hectometer", "sq hm|sq hectometer|sq hectometre|sq hectometers|sq hectometres|square hectometer|square hectometre|square hectometers|square hectometres|hm2|hm^2|hm²|hectare|hectares"],["Square decameter", "sq dam|sq decameter|sq decametre|sq decameters|sq decametres|square decameter|square decametre|square decameters|square decametres|sq dekameter|sq dekametre|sq dekameters|sq dekametres|square dekameter|square dekametre|square dekameters|square dekametres|dam2|dam^2|dam²"],["Square meter", "sq m|sq meter|sq metre|sq meters|sq metres|sq metre|square meter|square meters|square metre|square metres|m2|m^2|m²"],["Square decimeter", "sq dm|sq decimeter|sq decimetre|sq decimeters|sq decimetres|square decimeter|square decimetre|square decimeters|square decimetres|dm2|dm^2|dm²"],["Square centimeter", "sq cm|sq centimeter|sq centimetre|sq centimeters|sq centimetres|square centimeter|square centimetre|square centimeters|square centimetres|cm2|cm^2|cm²"],["Square millimeter", "sq mm|sq millimeter|sq millimetre|sq millimeters|sq millimetres|square millimeter|square millimetre|square millimeters|square millimetres|mm2|mm^2|mm²"],["Square inch", "sq in|sq inch|square inch|square inches|in2|in^2|in²"],["Square foot", "sqft|sq ft|sq foot|sq feet|square foot|square feet|feet2|feet^2|feet²|ft2|ft^2|ft²"],["Square mile", "sq mi|sq mile|sqmiles|square mile|square miles|mi2|mi^2|mi²"],["Square yard", "sq yd|sq yard|sq yards|square yard|square yards|yd2|yd^2|yd²"],["Acre", "-acre|acre|acres"]]);
	export const CurrencySuffixList: ReadonlyMap<string, string> = new Map<string, string>([["Abkhazian apsar", "abkhazian apsar|apsars"],["Afghan afghani", "afghan afghani|؋|afn|afghanis|afghani"],["Pul", "pul"],["Euro", "euros|euro|€|eur"],["Cent", "cents|cent|-cents|-cent|sen"],["Albanian lek", "albanian lek|leks|lek"],["Qindarkë", "qindarkë|qindarkës|qindarke|qindarkes"],["Angolan kwanza", "angolan kwanza|kz|aoa|kwanza|kwanzas|angolan kwanzas"],["Armenian dram", "armenian drams|armenian dram"],["Aruban florin", "aruban florin|ƒ|awg|aruban florins"],["Bangladeshi taka", "bangladeshi taka|৳|bdt|taka|takas|bangladeshi takas"],["Paisa", "poisha|paisa"],["Bhutanese ngultrum", "Bhutanese ngultrum|nu.|btn"],["Chetrum", "chetrums|chetrum"],["Bolivian boliviano", "bolivian boliviano|bob|bs.|bolivia boliviano|bolivia bolivianos|bolivian bolivianos"],["Bosnia and Herzegovina convertible mark", "bosnia and herzegovina convertible mark|bam"],["Fening", "fenings|fenings"],["Botswana pula", "botswana pula|bwp|pula|pulas|botswana pulas"],["Thebe", "thebe"],["Brazilian real", "brazilian real|r$|brl|brazil real|brazil reals|brazilian reals"],["Bulgarian lev", "bulgarian lev|bgn|лв|bulgaria lev|bulgaria levs|bulgarian levs"],["Stotinka", "stotinki|stotinka"],["Cambodian riel", "cambodian riel|khr|៛|cambodia riel|cambodia riels|cambodian riels"],["Cape Verdean escudo", "cape verdean escudo|cve"],["Costa Rican colón", "costa rican colón|costa rican colóns|crc|₡|costa rica colón|costa rica colóns|costa rican colon|costa rican colons|costa rica colon|costa rica colons"],["Salvadoran colón", "svc|salvadoran colón|salvadoran colóns|salvador colón|salvador colóns|salvadoran colon|salvadoran colons|salvador colon|salvador colons"],["Céntimo", "céntimo"],["Croatian kuna", "croatian kuna|kn|hrk|croatia kuna|croatian kunas|croatian kuna kunas"],["Lipa", "lipa"],["Czech koruna", "czech koruna|czk|Kč|czech korunas"],["Haléř", "haléř"],["Eritrean nakfa", "eritrean nakfa|nfk|ern|eritrean nakfas"],["Ethiopian birr", "ethiopian birr|etb"],["Gambian dalasi", "gmd"],["Butut", "bututs|butut"],["Georgian lari", "Georgian lari|lari|gel|₾"],["Tetri", "tetri"],["Ghanaian cedi", "Ghanaian cedi|ghs|₵|gh₵"],["Pesewa", "pesewas|pesewa"],["Guatemalan quetzal", "guatemalan quetzal|gtq|guatemala quetzal"],["Haitian gourde", "haitian gourde|htg"],["Honduran lempira", "honduran lempira|hnl"],["Hungarian forint", "hungarian forint|huf|ft|hungary forint|hungary forints|hungarian forints"],["Fillér", "fillér"],["Iranian rial", "iranian rial|irr|iran rial|iran rials|iranian rials"],["Yemeni rial", "yemeni rial|yer|yemeni rials"],["Israeli new shekel", "₪|ils|agora"],["Lithuanian litas", "ltl|lithuanian litas|lithuan litas|lithuanian lit|lithuan lit"],["Japanese yen", "japanese yen|jpy|yen|-yen|¥|yens|japanese yens|japan yen|japan yens"],["Kazakhstani tenge", "Kazakhstani tenge|kzt"],["Kenyan shilling", "kenyan shilling|sh|kes"],["North Korean won", "north korean won|kpw|north korean wons"],["South Korean won", "south korean won|krw|south korean wons"],["Korean won", "korean won|₩|korean wons"],["Kyrgyzstani som", "kyrgyzstani som|kgs"],["Uzbekitan som", "uzbekitan som|uzs"],["Lao kip", "lao kip|lak|₭n|₭"],["Att", "att"],["Lesotho loti", "lesotho loti|lsl|loti"],["Sente", "sente|lisente"],["South African rand", "south african rand|zar|south africa rand|south africa rands|south african rands"],["Macanese pataca", "macanese pataca|mop$|mop"],["Avo", "avos|avo"],["Macedonian denar", "macedonian denar|mkd|ден"],["Deni", "deni"],["Malagasy ariary", "malagasy ariary|mga"],["Iraimbilanja", "iraimbilanja"],["Malawian kwacha", "malawian kwacha|mk|mwk"],["Tambala", "tambala"],["Malaysian ringgit", "malaysian ringgit|rm|myr|malaysia ringgit|malaysia ringgits|malaysian ringgits"],["Mauritanian ouguiya", "mauritanian ouguiya|um|mro|mauritania ouguiya|mauritania ouguiyas|mauritanian ouguiyas"],["Khoums", "khoums"],["Mongolian tögrög", "mongolian tögrög|mnt|₮|mongolia tögrög|mongolia tögrögs|mongolian tögrögs|mongolian togrog|mongolian togrogs|mongolia togrog|mongolia togrogs"],["Mozambican metical", "mozambican metical|mt|mzn|mozambica metical|mozambica meticals|mozambican meticals"],["Burmese kyat", "Burmese kyat|ks|mmk"],["Pya", "pya"],["Nicaraguan córdoba", "nicaraguan córdoba|nio"],["Nigerian naira", "nigerian naira|naira|ngn|₦|nigeria naira|nigeria nairas|nigerian nairas"],["Kobo", "kobo"],["Turkish lira", "turkish lira|try|tl|turkey lira|turkey liras|turkish liras"],["Kuruş", "kuruş"],["Omani rial", "omani rial|omr|ر.ع."],["Panamanian balboa", "panamanian balboa|b/.|pab"],["Centesimo", "centesimo|céntimo"],["Papua New Guinean kina", "papua new guinean kina|kina|pgk"],["Toea", "toea"],["Paraguayan guaraní", "paraguayan guaraní|₲|pyg"],["Peruvian sol", "peruvian sol|soles|sol|peruvian nuevo sol"],["Polish złoty", "złoty|polish złoty|zł|pln|zloty|polish zloty|poland zloty|poland złoty"],["Grosz", "groszy|grosz|grosze"],["Qatari riyal", "qatari riyal|qar|qatari riyals|qatar riyal|qatar riyals"],["Saudi riyal", "saudi riyal|sar|saudi riyals"],["Riyal", "riyal|riyals|rial|﷼"],["Dirham", "dirham|dirhem|dirhm"],["Halala", "halalas|halala"],["Samoan tālā", "samoan tālā|tālā|tala|ws$|samoa|wst|samoan tala"],["Sene", "sene"],["São Tomé and Príncipe dobra", "são tomé and príncipe dobra|dobras|dobra|std"],["Sierra Leonean leone", "sierra Leonean leone|sll|leone|le"],["Peseta", "pesetas|peseta"],["Netherlands guilder", "florin|netherlands antillean guilder|ang|ƒ|nederlandse gulden|guilders|guilder|gulden|-guilders|-guilder|dutch guilders|dutch guilder|fl"],["Swazi lilangeni", "swazi lilangeni|lilangeni|szl|emalangeni"],["Tajikistani somoni", "tajikistani somoni|tjs|somoni"],["Diram", "dirams|diram"],["Thai baht", "thai baht|฿|thb|baht"],["Satang", "satang|satangs"],["Tongan paʻanga", "tongan paʻanga|paʻanga|tongan pa'anga|pa'anga"],["Seniti", "seniti"],["Ukrainian hryvnia", "ukrainian hryvnia|hyrvnia|uah|₴|ukrain hryvnia|ukrain hryvnias|ukrainian hryvnias"],["Vanuatu vatu", "vanuatu vatu|vatu|vuv"],["Venezuelan bolívar", "venezuelan bolívar|venezuelan bolívars|bs.f.|vef|bolívar fuerte|venezuelan bolivar|venezuelan bolivars|venezuela bolivar|venezuela bolivarsvenezuelan bolivar|venezuelan bolivars"],["Vietnamese dong", "vietnamese dong|vnd|đồng|vietnam dong|vietnamese dongs|vietnam dongs"],["Zambian kwacha", "zambian kwacha|zk|zmw|zambia kwacha|kwachas|zambian kwachas"],["Moroccan dirham", "moroccan dirham|mad|د.م."],["United Arab Emirates dirham", "united arab emirates dirham|د.إ|aed"],["Azerbaijani manat", "azerbaijani manat|azn"],["Turkmenistan manat", "turkmenistan manat|turkmenistan new manat|tmt"],["Manat", "manats|manat"],["Qəpik", "qəpik"],["Somali shilling", "somali shillings|somali shilling|shilin soomaali|-shilin soomaali|scellino|shilin|sh.so.|sos"],["Somaliland shilling", "somaliland shillings|somaliland shilling|soomaaliland shilin"],["Tanzanian shilling", "tanzanian shilling|tanzanian shillings|tsh|tzs|tanzania shilling|tanzania shillings"],["Ugandan shilling", "ugandan shilling|ugandan shillings|sh|ugx|uganda shilling|uganda shillings"],["Romanian leu", "romanian leu|lei|ron|romania leu"],["Moldovan leu", "moldovan leu|mdl|moldova leu"],["Leu", "leu"],["Ban", "bani|-ban|ban"],["Nepalese rupee", "nepalese rupee|npr"],["Pakistani rupee", "pakistani rupee|pkr"],["Indian rupee", "indian rupee|inr|₹|india rupee"],["Seychellois rupee", "seychellois rupee|scr|sr|sre"],["Mauritian rupee", "mauritian rupee|mur"],["Maldivian rufiyaa", "maldivian rufiyaa|rf|mvr|.ރ|maldive rufiyaa"],["Sri Lankan rupee", "sri Lankan rupee|lkr|රු|ரூ"],["Indonesian rupiah", "Indonesian rupiah|rupiah|perak|rp|idr"],["Rupee", "rupee|rs"],["Danish krone", "danish krone|dkk|denmark krone|denmark krones|danish krones"],["Norwegian krone", "norwegian krone|nok|norway krone|norway krones|norwegian krones"],["Faroese króna", "faroese króna|faroese krona"],["Icelandic króna", "icelandic króna|isk|icelandic krona|iceland króna|iceland krona"],["Swedish krona", "swedish krona|sek|swedan krona"],["Krone", "kronor|krona|króna|krone|krones|kr|-kr"],["Øre", "Øre|oyra|eyrir"],["West African CFA franc", "west african cfa franc|xof|west africa cfa franc|west africa franc|west african franc"],["Central African CFA franc", "central african cfa franc|xaf|central africa cfa franc|central african franc|central africa franc"],["Comorian franc", "comorian franc|kmf"],["Congolese franc", "congolese franc|cdf"],["Burundian franc", "burundian franc|bif"],["Djiboutian franc", "djiboutian franc|djf"],["CFP franc", "cfp franc|xpf"],["Guinean franc", "guinean franc|gnf"],["Swiss franc", "swiss francs|swiss franc|chf|sfr."],["Rwandan franc", "Rwandan franc|rwf|rf|r₣|frw"],["Belgian franc", "belgian franc|bi.|b.fr.|bef|belgium franc"],["Rappen", "rappen|-rappen"],["Franc", "francs|franc|fr.|fs"],["Centime", "centimes|centime|santim"],["Russian ruble", "russian ruble|₽|rub|russia ruble|russia ₽|russian ₽|russian rubles|russia rubles"],["New Belarusian ruble", "new belarusian ruble|byn|new belarus ruble|new belarus rubles|new belarusian rubles"],["Old Belarusian ruble", "old belarusian ruble|byr|old belarus ruble|old belarus rubles|old belarusian rubles"],["Transnistrian ruble", "transnistrian ruble|prb|р."],["Belarusian ruble", "belarusian ruble|belarus ruble|belarus rubles|belarusian rubles"],["Kopek", "kopek|kopeks"],["Kapyeyka", "kapyeyka"],["Ruble", "rubles|ruble|br"],["Algerian dinar", "algerian dinar|د.ج|dzd|algerian dinars|algeria dinar|algeria dinars"],["Bahraini dinar", "bahraini dinars|bahraini dinar|bhd|.د.ب"],["Santeem", "santeem|santeems"],["Iraqi dinar", "iraqi dinars|iraqi dinar|iraq dinars|iraq dinar|iqd|ع.د"],["Jordanian dinar", "jordanian dinars|jordanian dinar|د.ا|jod|jordan dinar|jordan dinars"],["Kuwaiti dinar", "kuwaiti dinars|kuwaiti dinar|kwd|د.ك"],["Libyan dinar", "libyan dinars|libyan dinar|libya dinars|libya dinar|lyd"],["Serbian dinar", "serbian dinars|serbian dinar|din.|rsd|дин.|serbia dinars|serbia dinar"],["Tunisian dinar", "tunisian dinars|tunisian dinar|tnd|tunisia dinars|tunisia dinar"],["Yugoslav dinar", "yugoslav dinars|yugoslav dinar|yun"],["Dinar", "dinars|dinar|denar|-dinars|-dinar"],["Fils", "fils|fulūs|-fils|-fil"],["Para", "para|napa"],["Millime", "millimes|millime"],["Argentine peso", "argentine peso|ars|argetina peso|argetina pesos|argentine pesos"],["Chilean peso", "chilean pesos|chilean peso|clp|chile peso|chile peso"],["Colombian peso", "colombian pesos|colombian peso|cop|colombia peso|colombia pesos"],["Cuban convertible peso", "cuban convertible pesos|cuban convertible peso|cuc|cuba convertible pesos|cuba convertible peso"],["Cuban peso", "cuban pesos|cuban peso|cup|cuba pesos|cuba peso"],["Dominican peso", "dominican pesos|dominican peso|dop|dominica pesos|dominica peso"],["Mexican peso", "mexican pesos|mexican peso|mxn|mexico pesos|mexico peso"],["Philippine peso", "piso|philippine pesos|philippine peso|₱|php"],["Uruguayan peso", "uruguayan pesos|uruguayan peso|uyu"],["Peso", "pesos|peso"],["Centavo", "centavos|centavo"],["Alderney pound", "alderney pounds|alderney pound|alderney £"],["British pound", "british pounds|british pound|british £|gbp|pound sterling|pound sterlings|sterling|pound scot|pound scots"],["Guernsey pound", "guernsey pounds|guernsey £|ggp"],["Ascension pound", "ascension pounds|ascension pound|ascension £"],["Saint Helena pound", "saint helena pounds|saint helena pound|saint helena £|shp"],["Egyptian pound", "egyptian pounds|egyptian pound|egyptian £|egp|ج.م|egypt pounds|egypt pound"],["Falkland Islands pound", "falkland islands pounds|falkland islands pound|falkland islands £|fkp|falkland island pounds|falkland island pound|falkland island £"],["Gibraltar pound", "gibraltar pounds|gibraltar pound|gibraltar £|gip"],["Manx pound", "manx pounds|manx pound|manx £|imp"],["Jersey pound", "jersey pounds|jersey pound|jersey £|jep"],["Lebanese pound", "lebanese pounds|lebanese pound|lebanese £|lebanan pounds|lebanan pound|lebanan £|lbp|ل.ل"],["South Georgia and the South Sandwich Islands pound", "south georgia and the south sandwich islands pounds|south georgia and the south sandwich islands pound|south georgia and the south sandwich islands £"],["South Sudanese pound", "south sudanese pounds|south sudanese pound|south sudanese £|ssp|south sudan pounds|south sudan pound|south sudan £"],["Sudanese pound", "sudanese pounds|sudanese pound|sudanese £|ج.س.|sdg|sudan pounds|sudan pound|sudan £"],["Syrian pound", "syrian pounds|syrian pound|syrian £|ل.س|syp|syria pounds|syria pound|syria £"],["Tristan da Cunha pound", "tristan da cunha pounds|tristan da cunha pound|tristan da cunha £"],["Pound", "pounds|pound|-pounds|-pound|£"],["Pence", "pence"],["Shilling", "shillings|shilling|shilingi"],["Penny", "pennies|penny"],["United States dollar", "united states dollars|united states dollar|united states $|u.s. dollars|u.s. dollar|u s dollar|u s dollars|usd|american dollars|american dollar|us$|us dollar|us dollars|u.s dollar|u.s dollars"],["East Caribbean dollar", "east caribbean dollars|east caribbean dollar|east Caribbean $|xcd"],["Australian dollar", "australian dollars|australian dollar|australian $|australian$|aud|australia dollars|australia dollar|australia $|australia$"],["Bahamian dollar", "bahamian dollars|bahamian dollar|bahamian $|bahamian$|bsd|bahamia dollars|bahamia dollar|bahamia $|bahamia$"],["Barbadian dollar", "barbadian dollars|barbadian dollar|barbadian $|bbd"],["Belize dollar", "belize dollars|belize dollar|belize $|bzd"],["Bermudian dollar", "bermudian dollars|bermudian dollar|bermudian $|bmd|bermudia dollars|bermudia dollar|bermudia $"],["British Virgin Islands dollar", "british virgin islands dollars|british virgin islands dollar|british virgin islands $|bvi$|virgin islands dollars|virgin islands dolalr|virgin islands $|virgin island dollars|virgin island dollar|virgin island $"],["Brunei dollar", "brunei dollar|brunei $|bnd"],["Sen", "sen"],["Singapore dollar", "singapore dollars|singapore dollar|singapore $|s$|sgd"],["Canadian dollar", "canadian dollars|canadian dollar|canadian $|cad|can$|c$|canada dollars|canada dolllar|canada $"],["Cayman Islands dollar", "cayman islands dollars|cayman islands dollar|cayman islands $|kyd|ci$|cayman island dollar|cayman island doolars|cayman island $"],["New Zealand dollar", "new zealand dollars|new zealand dollar|new zealand $|nz$|nzd|kiwi"],["Cook Islands dollar", "cook islands dollars|cook islands dollar|cook islands $|cook island dollars|cook island dollar|cook island $"],["Fijian dollar", "fijian dollars|fijian dollar|fijian $|fjd|fiji dollars|fiji dollar|fiji $"],["Guyanese dollar", "guyanese dollars|guyanese dollar|gyd|gy$"],["Hong Kong dollar", "hong kong dollars|hong kong dollar|hong kong $|hk$|hkd|hk dollars|hk dollar|hk $|hongkong$"],["Jamaican dollar", "jamaican dollars|jamaican dollar|jamaican $|j$|jamaica dollars|jamaica dollar|jamaica $|jmd"],["Kiribati dollar", "kiribati dollars|kiribati dollar|kiribati $"],["Liberian dollar", "liberian dollars|liberian dollar|liberian $|liberia dollars|liberia dollar|liberia $|lrd"],["Micronesian dollar", "micronesian dollars|micronesian dollar|micronesian $"],["Namibian dollar", "namibian dollars|namibian dollar|namibian $|nad|n$|namibia dollars|namibia dollar|namibia $"],["Nauruan dollar", "nauruan dollars|nauruan dollar|nauruan $"],["Niue dollar", "niue dollars|niue dollar|niue $"],["Palauan dollar", "palauan dollars|palauan dollar|palauan $"],["Pitcairn Islands dollar", "pitcairn islands dollars|pitcairn islands dollar|pitcairn islands $|pitcairn island dollars|pitcairn island dollar|pitcairn island $"],["Solomon Islands dollar", "solomon islands dollars|solomon islands dollar|solomon islands $|si$|sbd|solomon island dollars|solomon island dollar|solomon island $"],["Surinamese dollar", "surinamese dollars|surinamese dollar|surinamese $|srd"],["New Taiwan dollar", "new taiwan dollars|new taiwan dollar|nt$|twd|ntd"],["Trinidad and Tobago dollar", "trinidad and tobago dollars|trinidad and tobago dollar|trinidad and tobago $|trinidad $|trinidad dollar|trinidad dollars|trinidadian dollar|trinidadian dollars|trinidadian $|ttd"],["Tuvaluan dollar", "tuvaluan dollars|tuvaluan dollar|tuvaluan $"],["Dollar", "dollars|dollar|$"],["Chinese yuan", "yuan|kuai|chinese yuan|renminbi|cny|rmb|￥"],["Fen", "fen"],["Jiao", "jiao|mao"],["Finnish markka", "suomen markka|finnish markka|finsk mark|fim|markkaa|markka"],["Penni", "penniä|penni"]]);
	export const CurrencyNameToIsoCodeMap: ReadonlyMap<string, string> = new Map<string, string>([["Afghan afghani", "AFN"],["Euro", "EUR"],["Albanian lek", "ALL"],["Angolan kwanza", "AOA"],["Armenian dram", "AMD"],["Aruban florin", "AWG"],["Bangladeshi taka", "BDT"],["Bhutanese ngultrum", "BTN"],["Bolivian boliviano", "BOB"],["Bosnia and Herzegovina convertible mark", "BAM"],["Botswana pula", "BWP"],["Brazilian real", "BRL"],["Bulgarian lev", "BGN"],["Cambodian riel", "KHR"],["Cape Verdean escudo", "CVE"],["Costa Rican colón", "CRC"],["Croatian kuna", "HRK"],["Czech koruna", "CZK"],["Eritrean nakfa", "ERN"],["Ethiopian birr", "ETB"],["Gambian dalasi", "GMD"],["Georgian lari", "GEL"],["Ghanaian cedi", "GHS"],["Guatemalan quetzal", "GTQ"],["Haitian gourde", "HTG"],["Honduran lempira", "HNL"],["Hungarian forint", "HUF"],["Iranian rial", "IRR"],["Yemeni rial", "YER"],["Israeli new shekel", "ILS"],["Japanese yen", "JPY"],["Kazakhstani tenge", "KZT"],["Kenyan shilling", "KES"],["North Korean won", "KPW"],["South Korean won", "KRW"],["Kyrgyzstani som", "KGS"],["Lao kip", "LAK"],["Lesotho loti", "LSL"],["South African rand", "ZAR"],["Macanese pataca", "MOP"],["Macedonian denar", "MKD"],["Malagasy ariary", "MGA"],["Malawian kwacha", "MWK"],["Malaysian ringgit", "MYR"],["Mauritanian ouguiya", "MRO"],["Mongolian tögrög", "MNT"],["Mozambican metical", "MZN"],["Burmese kyat", "MMK"],["Nicaraguan córdoba", "NIO"],["Nigerian naira", "NGN"],["Turkish lira", "TRY"],["Omani rial", "OMR"],["Panamanian balboa", "PAB"],["Papua New Guinean kina", "PGK"],["Paraguayan guaraní", "PYG"],["Peruvian sol", "PEN"],["Polish złoty", "PLN"],["Qatari riyal", "QAR"],["Saudi riyal", "SAR"],["Samoan tālā", "WST"],["São Tomé and Príncipe dobra", "STD"],["Sierra Leonean leone", "SLL"],["Swazi lilangeni", "SZL"],["Tajikistani somoni", "TJS"],["Thai baht", "THB"],["Ukrainian hryvnia", "UAH"],["Vanuatu vatu", "VUV"],["Venezuelan bolívar", "VEF"],["Zambian kwacha", "ZMW"],["Moroccan dirham", "MAD"],["United Arab Emirates dirham", "AED"],["Azerbaijani manat", "AZN"],["Turkmenistan manat", "TMT"],["Somali shilling", "SOS"],["Tanzanian shilling", "TZS"],["Ugandan shilling", "UGX"],["Romanian leu", "RON"],["Moldovan leu", "MDL"],["Nepalese rupee", "NPR"],["Pakistani rupee", "PKR"],["Indian rupee", "INR"],["Seychellois rupee", "SCR"],["Mauritian rupee", "MUR"],["Maldivian rufiyaa", "MVR"],["Sri Lankan rupee", "LKR"],["Indonesian rupiah", "IDR"],["Danish krone", "DKK"],["Norwegian krone", "NOK"],["Icelandic króna", "ISK"],["Swedish krona", "SEK"],["West African CFA franc", "XOF"],["Central African CFA franc", "XAF"],["Comorian franc", "KMF"],["Congolese franc", "CDF"],["Burundian franc", "BIF"],["Djiboutian franc", "DJF"],["CFP franc", "XPF"],["Guinean franc", "GNF"],["Swiss franc", "CHF"],["Rwandan franc", "RWF"],["Russian ruble", "RUB"],["Transnistrian ruble", "PRB"],["Belarusian ruble", "BYN"],["Algerian dinar", "DZD"],["Bahraini dinar", "BHD"],["Iraqi dinar", "IQD"],["Jordanian dinar", "JOD"],["Kuwaiti dinar", "KWD"],["Libyan dinar", "LYD"],["Serbian dinar", "RSD"],["Tunisian dinar", "TND"],["Argentine peso", "ARS"],["Chilean peso", "CLP"],["Colombian peso", "COP"],["Cuban convertible peso", "CUC"],["Cuban peso", "CUP"],["Dominican peso", "DOP"],["Mexican peso", "MXN"],["Uruguayan peso", "UYU"],["British pound", "GBP"],["Saint Helena pound", "SHP"],["Egyptian pound", "EGP"],["Falkland Islands pound", "FKP"],["Gibraltar pound", "GIP"],["Manx pound", "IMP"],["Jersey pound", "JEP"],["Lebanese pound", "LBP"],["South Sudanese pound", "SSP"],["Sudanese pound", "SDG"],["Syrian pound", "SYP"],["United States dollar", "USD"],["Australian dollar", "AUD"],["Bahamian dollar", "BSD"],["Barbadian dollar", "BBD"],["Belize dollar", "BZD"],["Bermudian dollar", "BMD"],["Brunei dollar", "BND"],["Singapore dollar", "SGD"],["Canadian dollar", "CAD"],["Cayman Islands dollar", "KYD"],["New Zealand dollar", "NZD"],["Fijian dollar", "FJD"],["Guyanese dollar", "GYD"],["Hong Kong dollar", "HKD"],["Jamaican dollar", "JMD"],["Liberian dollar", "LRD"],["Namibian dollar", "NAD"],["Solomon Islands dollar", "SBD"],["Surinamese dollar", "SRD"],["New Taiwan dollar", "TWD"],["Trinidad and Tobago dollar", "TTD"],["Tuvaluan dollar", "TVD"],["Chinese yuan", "CNY"],["Rial", "__RI"],["Shiling", "__S"],["Som", "__SO"],["Dirham", "__DR"],["Dinar", "_DN"],["Dollar", "__D"],["Manat", "__MA"],["Rupee", "__R"],["Krone", "__K"],["Krona", "__K"],["Crown", "__K"],["Frank", "__F"],["Mark", "__M"],["Ruble", "__RB"],["Peso", "__PE"],["Pound", "__P"],["Tristan da Cunha pound", "_TP"],["South Georgia and the South Sandwich Islands pound", "_SP"],["Somaliland shilling", "_SS"],["Pitcairn Islands dollar", "_PND"],["Palauan dollar", "_PD"],["Niue dollar", "_NID"],["Nauruan dollar", "_ND"],["Micronesian dollar", "_MD"],["Kiribati dollar", "_KID"],["Guernsey pound", "_GGP"],["Faroese króna", "_FOK"],["Cook Islands dollar", "_CKD"],["British Virgin Islands dollar", "_BD"],["Ascension pound", "_AP"],["Alderney pound", "_ALP"],["Abkhazian apsar", "_AA"]]);
	export const FractionalUnitNameToCodeMap: ReadonlyMap<string, string> = new Map<string, string>([["Jiao", "JIAO"],["Kopek", "KOPEK"],["Pul", "PUL"],["Cent", "CENT"],["Qindarkë", "QINDARKE"],["Penny", "PENNY"],["Santeem", "SANTEEM"],["Cêntimo", "CENTIMO"],["Centavo", "CENTAVO"],["Luma", "LUMA"],["Qəpik", "QƏPIK"],["Fils", "FILS"],["Poisha", "POISHA"],["Kapyeyka", "KAPYEYKA"],["Centime", "CENTIME"],["Chetrum", "CHETRUM"],["Paisa", "PAISA"],["Fening", "FENING"],["Thebe", "THEBE"],["Sen", "SEN"],["Stotinka", "STOTINKA"],["Fen", "FEN"],["Céntimo", "CENTIMO"],["Lipa", "LIPA"],["Haléř", "HALER"],["Øre", "ØRE"],["Piastre", "PIASTRE"],["Santim", "SANTIM"],["Oyra", "OYRA"],["Butut", "BUTUT"],["Tetri", "TETRI"],["Pesewa", "PESEWA"],["Fillér", "FILLER"],["Eyrir", "EYRIR"],["Dinar", "DINAR"],["Agora", "AGORA"],["Tïın", "TIIN"],["Chon", "CHON"],["Jeon", "JEON"],["Tyiyn", "TYIYN"],["Att", "ATT"],["Sente", "SENTE"],["Dirham", "DIRHAM"],["Rappen", "RAPPEN"],["Avo", "AVO"],["Deni", "DENI"],["Iraimbilanja", "IRAIMBILANJA"],["Tambala", "TAMBALA"],["Laari", "LAARI"],["Khoums", "KHOUMS"],["Ban", "BAN"],["Möngö", "MONGO"],["Pya", "PYA"],["Kobo", "KOBO"],["Kuruş", "KURUS"],["Baisa", "BAISA"],["Centésimo", "CENTESIMO"],["Toea", "TOEA"],["Sentimo", "SENTIMO"],["Grosz", "GROSZ"],["Sene", "SENE"],["Halala", "HALALA"],["Para", "PARA"],["Öre", "ORE"],["Diram", "DIRAM"],["Satang", "SATANG"],["Seniti", "SENITI"],["Millime", "MILLIME"],["Tennesi", "TENNESI"],["Kopiyka", "KOPIYKA"],["Tiyin", "TIYIN"],["Hào", "HAO"],["Ngwee", "NGWEE"]]);
	export const CompoundUnitConnectorRegex = `(?<spacer>and)`;
	export const CurrencyPrefixList: ReadonlyMap<string, string> = new Map<string, string>([["Dollar", "$"],["United States dollar", "united states $|us$|us $|u.s. $|u.s $"],["East Caribbean dollar", "east caribbean $"],["Australian dollar", "australian $|australia $"],["Bahamian dollar", "bahamian $|bahamia $"],["Barbadian dollar", "barbadian $|barbadin $"],["Belize dollar", "belize $"],["Bermudian dollar", "bermudian $"],["British Virgin Islands dollar", "british virgin islands $|bvi$|virgin islands $|virgin island $|british virgin island $"],["Brunei dollar", "brunei $|b$"],["Sen", "sen"],["Singapore dollar", "singapore $|s$"],["Canadian dollar", "canadian $|can$|c$|c $|canada $"],["Cayman Islands dollar", "cayman islands $|ci$|cayman island $"],["New Zealand dollar", "new zealand $|nz$|nz $"],["Cook Islands dollar", "cook islands $|cook island $"],["Fijian dollar", "fijian $|fiji $"],["Guyanese dollar", "gy$|gy $|g$|g $"],["Hong Kong dollar", "hong kong $|hk$|hkd|hk $"],["Jamaican dollar", "jamaican $|j$|jamaica $"],["Kiribati dollar", "kiribati $"],["Liberian dollar", "liberian $|liberia $"],["Micronesian dollar", "micronesian $"],["Namibian dollar", "namibian $|nad|n$|namibia $"],["Nauruan dollar", "nauruan $"],["Niue dollar", "niue $"],["Palauan dollar", "palauan $"],["Pitcairn Islands dollar", "pitcairn islands $|pitcairn island $"],["Solomon Islands dollar", "solomon islands $|si$|si $|solomon island $"],["Surinamese dollar", "surinamese $|surinam $"],["New Taiwan dollar", "nt$|nt $"],["Trinidad and Tobago dollar", "trinidad and tobago $|trinidad $|trinidadian $"],["Tuvaluan dollar", "tuvaluan $"],["Samoan tālā", "ws$"],["Chinese yuan", "￥"],["Japanese yen", "¥"],["Euro", "€"],["Pound", "£"],["Costa Rican colón", "₡"],["Turkish lira", "₺"]]);
	export const AmbiguousCurrencyUnitList = [ 'din.','kiwi','kina','kobo','lari','lipa','napa','para','sfr.','taka','tala','toea','vatu','yuan','ang','ban','bob','btn','byr','cad','cop','cup','dop','gip','jod','kgs','lak','lei','mga','mop','nad','omr','pul','sar','sbd','scr','sdg','sek','sen','sol','sos','std','try','yer','yen' ];
	export const InformationSuffixList: ReadonlyMap<string, string> = new Map<string, string>([["Bit", "-bit|bit|bits"],["Kilobit", "kilobit|kilobits|kb|kbit"],["Megabit", "megabit|megabits|Mb|Mbit"],["Gigabit", "gigabit|gigabits|Gb|Gbit"],["Terabit", "terabit|terabits|Tb|Tbit"],["Petabit", "petabit|petabits|Pb|Pbit"],["Byte", "-byte|byte|bytes"],["Kilobyte", "-kilobyte|-kilobytes|kilobyte|kB|kilobytes|kilo byte|kilo bytes|kByte"],["Megabyte", "-megabyte|-megabytes|megabyte|mB|megabytes|mega byte|mega bytes|MByte"],["Gigabyte", "-gigabyte|-gigabytes|gigabyte|gB|gigabytes|giga byte|giga bytes|GByte"],["Terabyte", "-terabyte|-terabytes|terabyte|tB|terabytes|tera byte|tera bytes|TByte"],["Petabyte", "-petabyte|-petabytes|petabyte|pB|petabytes|peta byte|peta bytes|PByte"]]);
	export const AmbiguousDimensionUnitList = [ 'barrel','barrels','grain','pound','stone','yards','yard','cord','dram','feet','foot','gill','knot','peck','cup','fps','pts','in','dm','\\\"' ];
	export const BuildPrefix = `(?<=(\\s|^))`;
	export const BuildSuffix = `(?=(\\s|\\W|$))`;
	export const LenghtSuffixList: ReadonlyMap<string, string> = new Map<string, string>([["Kilometer", "km|kilometer|kilometre|kilometers|kilometres|kilo meter|kilo meters|kilo metres|kilo metre"],["Hectometer", "hm|hectometer|hectometre|hectometers|hectometres|hecto meter|hecto meters|hecto metres|hecto metre"],["Decameter", "dam|decameter|decametre|decameters|decametres|deca meter|deca meters|deca metres|deca metre"],["Meter", "m|meter|metre|meters|metres"],["Decimeter", "dm|decimeter|decimeters|decimetre|decimetres|deci meter|deci meters|deci metres|deci metre"],["Centimeter", "cm|centimeter|centimeters|centimetre|centimetres|centi meter|centi meters|centi metres|centi metre"],["Millimeter", "mm|millimeter|millimeters|millimetre|millimetres|milli meter|milli meters|milli metres|milli metre"],["Micrometer", "μm|micrometer|micrometre|micrometers|micrometres|micro meter|micro meters|micro metres|micro metre"],["Nanometer", "nm|nanometer|nanometre|nanometers|nanometres|nano meter|nano meters|nano metres|nano metre"],["Picometer", "pm|picometer|picometre|picometers|picometres|pico meter|pico meters|pico metres|pico metre"],["Mile", "-mile|mile|miles"],["Yard", "yard|yards"],["Inch", "-inch|inch|inches|in|\\\""],["Foot", "-foot|foot|feet|ft"],["Light year", "light year|light-year|light years|light-years"],["Pt", "pt|pts"]]);
	export const AmbiguousLengthUnitList = [ 'm','yard','yards','pm','pt','pts' ];
	export const SpeedSuffixList: ReadonlyMap<string, string> = new Map<string, string>([["Meter per second", "meters / second|m/s|meters per second|metres per second|meter per second|metre per second"],["Kilometer per hour", "km/h|kilometres per hour|kilometers per hour|kilometer per hour|kilometre per hour"],["Kilometer per minute", "km/min|kilometers per minute|kilometres per minute|kilometer per minute|kilometre per minute"],["Kilometer per second", "km/s|kilometers per second|kilometres per second|kilometer per second|kilometre per second"],["Mile per hour", "mph|mile per hour|miles per hour|mi/h|mile / hour|miles / hour|miles an hour"],["Knot", "kt|knot|kn"],["Foot per second", "ft/s|foot/s|foot per second|feet per second|fps"],["Foot per minute", "ft/min|foot/min|foot per minute|feet per minute"],["Yard per minute", "yards per minute|yard per minute|yards / minute|yards/min|yard/min"],["Yard per second", "yards per second|yard per second|yards / second|yards/s|yard/s"]]);
	export const TemperatureSuffixList: ReadonlyMap<string, string> = new Map<string, string>([["F", "degrees fahrenheit|degree fahrenheit|deg fahrenheit|degs fahrenheit|fahrenheit|°f|degrees farenheit|degree farenheit|deg farenheit|degs farenheit|degrees f|degree f|deg f|degs f|farenheit|f"],["K", "k|kelvin"],["R", "rankine|°r"],["D", "delisle|°de"],["C", "degrees celsius|degree celsius|deg celsius|degs celsius|celsius|degrees celcius|degree celcius|celcius|deg celcius|degs celcius|degrees centigrade|degree centigrade|centigrade|degrees centigrate|degree centigrate|degs centigrate|deg centigrate|centigrate|degrees c|degree c|deg c|degs c|°c|c"],["Degree", "degree|degrees|deg.|deg|°"]]);
	export const AmbiguousTemperatureUnitList = [ 'c','f','k' ];
	export const VolumeSuffixList: ReadonlyMap<string, string> = new Map<string, string>([["Cubic meter", "m3|cubic meter|cubic meters|cubic metre|cubic metres"],["Cubic centimeter", "cubic centimeter|cubic centimetre|cubic centimeters|cubic centimetres"],["Cubic millimiter", "cubic millimiter|cubic millimitre|cubic millimiters|cubic millimitres"],["Hectoliter", "hectoliter|hectolitre|hectoliters|hectolitres"],["Decaliter", "decaliter|decalitre|dekaliter|dekalitre|decaliters|decalitres|dekaliters|dekalitres"],["Liter", "l|litre|liter|liters|litres"],["Deciliter", "dl|deciliter|decilitre|deciliters|decilitres"],["Centiliter", "cl|centiliter|centilitre|centiliters|centilitres"],["Milliliter", "ml|mls|millilitre|milliliter|millilitres|milliliters"],["Cubic yard", "cubic yard|cubic yards"],["Cubic inch", "cubic inch|cubic inches"],["Cubic foot", "cubic foot|cubic feet"],["Cubic mile", "cubic mile|cubic miles"],["Fluid ounce", "fl oz|fluid ounce|fluid ounces"],["Teaspoon", "teaspoon|teaspoons"],["Tablespoon", "tablespoon|tablespoons"],["Pint", "pint|pints"],["Volume unit", "fluid dram|gill|quart|minim|barrel|cord|peck|bushel|hogshead"]]);
	export const AmbiguousVolumeUnitList = [ 'l','ounce','oz','cup','peck','cord','gill' ];
	export const WeightSuffixList: ReadonlyMap<string, string> = new Map<string, string>([["Kilogram", "kg|kilogram|kilograms|kilo|kilos"],["Gram", "g|gram|grams"],["Milligram", "mg|milligram|milligrams"],["Barrel", "barrels|barrel"],["Gallon", "-gallon|gallons|gallon"],["Metric ton", "metric tons|metric ton"],["Ton", "-ton|ton|tons|tonne|tonnes"],["Pound", "pound|pounds|lb"],["Ounce", "-ounce|ounce|oz|ounces"],["Weight unit", "pennyweight|grain|british long ton|US short hundredweight|stone|dram"]]);
	export const AmbiguousWeightUnitList = [ 'g','oz','stone','dram' ];
}
