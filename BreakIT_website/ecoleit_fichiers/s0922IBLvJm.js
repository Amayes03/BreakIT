;/*FB_PKG_DELIM*/

__d("CometFeedStoryMenuQuery$Parameters",["CometFeedStoryMenuQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometFeedStoryMenuQuery_facebookRelayOperation"),metadata:{},name:"CometFeedStoryMenuQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometShortenedExternalUrlEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometShortenedExternalUrlEntityRenderer_entity",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("CometEmojiWithContextualSize.react",["CometTextContext","CometTextTypography","cr:244","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=new Map([[16,16],[20,16],[24,20],[28,24],[32,30],[38,32]]);function k(){var a=i(c("CometTextContext"));a=(a=a==null?void 0:a.type)!=null?a:"body4";var b=16;a!=null&&(a in c("CometTextTypography")&&(b=c("CometTextTypography")[a].lineHeight));return(a=j.get(b))!=null?a:16}function a(a){var c=k();c=a.size!=null?a.size:c;return a.renderCustomEmoji?a.renderCustomEmoji(c):h.jsx(b("cr:244"),babelHelpers["extends"]({},a,{size:c}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("IntlDateStringsTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:IntlDateStringsLoggerConfig")}),null);
__d("IntlDateFormatsCLDRWidthEnum",[],(function(a,b,c,d,e,f){a=Object.freeze({FULL:"full",LONG:"long",MEDIUM:"medium",SHORT:"short"});f["default"]=a}),66);
__d("RegionDatetimePatterns",[],(function(a,b,c,d,e,f){a=Object.freeze({DATE_SHORT:"date_short",DATETIME_SHORT_SHORT:"dateTime_short_short",TIME_SHORT:"time_short",TIME_MEDIUM:"time_medium",J:"j"});f["default"]=a}),66);
__d("getCLDRLocalizedFormat",["CLDRDateFormatConfig","FBLogger","IntlDateFormatsCLDRWidthEnum","RegionDatetimePatterns","flipObject","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=b("CLDRDateFormatConfig").CLDRConfigeratorFormats,h=b("CLDRDateFormatConfig").CLDRRegionalConfigeratorFormats,i=b("flipObject")(b("RegionDatetimePatterns"));function a(a){if(a==null)throw b("unrecoverableViolation")('Format: "'+a+'", not supported by configurator.',"internationalization");var c,d,e=a.split("_"),f=e[0];e=e.slice(1);var l=f+"Formats";a in i?d=h:d=g;switch(l){case"dateFormats":case"timeFormats":var m=j(e[0]);if(m==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", with unsupported width: "undefined"',"internationalization");c=d[l][m];if(c==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", '+('width: "'+m+'", with unsupported localization'),"internationalization");break;case"dateTimeFormats":m=j(e[0]);e=j(e[1]);if(m==null||e==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", with unsupported width: dateFormatKey="undefined" timeFormatKey="undefined"',"internationalization");c=d[l][m];var n=d.dateFormats[m],o=d.timeFormats[e];if(c==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", '+('date width: "'+m+'", and time width: ')+('"'+e+'", with unsupported localization'),"internationalization");c=c.replace("{0}",o).replace("{1}",n);break;default:l="availableFormats";m=f;m.includes("j")&&(m=k(m,d.timeFormats));c=d[l][m];if(c==null)throw b("unrecoverableViolation")('Format: "'+a+'", with key: "'+m+'", not supported by CLDR',"internationalization")}return c}function j(a){if(a==null)throw b("unrecoverableViolation")("Expected CLDR width key to not be null","internationalization");return b("IntlDateFormatsCLDRWidthEnum")[a.toUpperCase()]}function k(a,c){var d;c=c["short"];c==null?(b("FBLogger")("formatDate").blameToPreviousFile().warn('CLDR `timeFormat`, width `short` required for 24 hour localization not found for availableKey: "%s"',a),d="h"):d=c.includes("H")?"H":"h";return a.replace("j",d)}e.exports=a}),null);
__d("intlGetDateNumerics",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){b=b.utc===!0;b?b={dateDay:a.getUTCDate(),dateDayOfWeek:a.getUTCDay(),dateMonth:a.getUTCMonth(),dateYear:a.getUTCFullYear(),dateHours:a.getUTCHours(),dateMinutes:a.getUTCMinutes(),dateSeconds:a.getUTCSeconds(),dateMilliseconds:a.getUTCMilliseconds()}:b={dateDay:a.getDate(),dateDayOfWeek:a.getDay(),dateMonth:a.getMonth(),dateYear:a.getFullYear(),dateHours:a.getHours(),dateMinutes:a.getMinutes(),dateSeconds:a.getSeconds(),dateMilliseconds:a.getMilliseconds()};return b}f["default"]=a}),66);
__d("DateStrings",["fbt"],(function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;function a(a){n||(n=[h._("Dimanche"),h._("Lundi"),h._("Mardi"),h._("Mercredi"),h._("Jeudi"),h._("Vendredi"),h._("Samedi")]);return n[a]}function b(a){p||(p=[h._("DIMANCHE"),h._("LUNDI"),h._("MARDI"),h._("MERCREDI"),h._("JEUDI"),h._("VENDREDI"),h._("SAMEDI")]);return p[a]}function c(a){o||(o=[h._("dim"),h._("lun"),h._("mar"),h._("mer"),h._("jeu"),h._("ven"),h._("sam")]);return o[a]}function d(a){q||(q=[h._("DIM"),h._("LUN"),h._("MAR"),h._("MER"),h._("JEU"),h._("VEN"),h._("SAM")]);return q[a]}function r(){i=[h._("janvier"),h._("f\u00e9vrier"),h._("mars"),h._("avril"),h._("mai"),h._("juin"),h._("juillet"),h._("ao\u00fbt"),h._("septembre"),h._("octobre"),h._("novembre"),h._("d\u00e9cembre")]}function e(a){i||r();return i[a-1]}function f(){i||r();return i.slice()}function s(a){l||(l=[h._("JANVIER"),h._("F\u00c9VRIER"),h._("MARS"),h._("AVRIL"),h._("MAI"),h._("JUIN"),h._("JUILLET"),h._("AO\u00dbT"),h._("SEPTEMBRE"),h._("OCTOBRE"),h._("NOVEMBRE"),h._("D\u00c9CEMBRE")]);return l[a-1]}function t(a){j||(j=[h._("jan"),h._("f\u00e9v"),h._("mar"),h._("avr"),h._("mai"),h._("jun"),h._("juil"),h._("ao\u00fbt"),h._("sep"),h._("oct"),h._("nov"),h._("d\u00e9c")]);return j[a-1]}function u(a){k||(k=[h._("JAN"),h._("F\u00c9V"),h._("MAR"),h._("AVR"),h._("MAI"),h._("JUN"),h._("JUIL"),h._("AO\u00db"),h._("SEP"),h._("OCT"),h._("NOV"),h._("D\u00c9C")]);return k[a-1]}function v(a){m||(m=["",h._("st"),h._("nd"),h._("rd"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("st"),h._("nd"),h._("rd"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("st")]);return m[a]}function w(a){switch(a){case 1:return h._("1er");case 2:return h._("2");case 3:return h._("3");case 4:return h._("4");case 5:return h._("5");case 6:return h._("6");case 7:return h._("7");case 8:return h._("8");case 9:return h._("9");case 10:return h._("10");case 11:return h._("11");case 12:return h._("12");case 13:return h._("13");case 14:return h._("14");case 15:return h._("15");case 16:return h._("16");case 17:return h._("17");case 18:return h._("18");case 19:return h._("19");case 20:return h._("20");case 21:return h._("21");case 22:return h._("22");case 23:return h._("23");case 24:return h._("24");case 25:return h._("25");case 26:return h._("26");case 27:return h._("27");case 28:return h._("28");case 29:return h._("29");case 30:return h._("30");case 31:return h._("31");default:throw new Error("Invalid day of month.")}}function x(){return h._("Jour\u00a0:")}function y(){return h._("Mois\u00a0:")}function z(){return h._("Ann\u00e9e\u00a0:")}function A(){return h._("Heure\u00a0:")}function B(){return h._("Minute\u00a0:")}function C(){return h._("jj")}function D(){return h._("mm")}function E(){return h._("aaaa")}function F(){return h._("h")}function G(){return h._("min")}function H(a){return a<12?h._("am"):h._("pm")}function I(a){return a<12?h._("AM"):h._("PM")}g.getWeekdayName=a;g.getUppercaseWeekdayName=b;g.getWeekdayNameShort=c;g.getUppercaseWeekdayNameShort=d;g._initializeMonthNames=r;g.getMonthName=e;g.getMonthNames=f;g.getUppercaseMonthName=s;g.getMonthNameShort=t;g.getUppercaseMonthNameShort=u;g.getOrdinalSuffix=v;g.getDayOfMonth=w;g.getDayLabel=x;g.getMonthLabel=y;g.getYearLabel=z;g.getHourLabel=A;g.getMinuteLabel=B;g.getDayPlaceholder=C;g.getMonthPlaceholder=D;g.getYearPlaceholder=E;g.getHourPlaceholder=F;g.getMinutePlaceholder=G;g.get12HourClockSuffix=H;g.getUppercase12HourClockSuffix=I}),98);
__d("intlRenderJSDateSymbol",["DateStrings","padNumber","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e,f,g){g===void 0&&(g=0);e=e.skipSuffixLocalization===!0;g=g;var h="";switch(b){case"\\":g++;if(f==null)throw c("unrecoverableViolation")("Only deprecated calls to `intlRenderJSDateSymbol()` use `localizedJSFormat`.","internationalization");h=f.charAt(g);break;case"d":h=c("padNumber")(a.dateDay,2);break;case"j":h=a.dateDay;break;case"S":h=d("DateStrings").getOrdinalSuffix(a.dateDay);break;case"D":h=d("DateStrings").getWeekdayNameShort(a.dateDayOfWeek);break;case"l":h=d("DateStrings").getWeekdayName(a.dateDayOfWeek);break;case"F":case"f":h=d("DateStrings").getMonthName(a.dateMonth+1);break;case"M":h=d("DateStrings").getMonthNameShort(a.dateMonth+1);break;case"m":h=c("padNumber")(a.dateMonth+1,2);break;case"n":h=a.dateMonth+1;break;case"Y":h=a.dateYear;break;case"y":h=(""+a.dateYear).slice(2);break;case"a":e?h=a.dateHours<12?"am":"pm":h=d("DateStrings").get12HourClockSuffix(a.dateHours);break;case"A":e?h=a.dateHours<12?"AM":"PM":h=d("DateStrings").getUppercase12HourClockSuffix(a.dateHours);break;case"g":a.dateHours===0||a.dateHours===12?h="12":h=a.dateHours%12;break;case"G":h=a.dateHours;break;case"h":a.dateHours===0||a.dateHours===12?h="12":h=c("padNumber")(a.dateHours%12,2);break;case"H":h=c("padNumber")(a.dateHours,2);break;case"i":h=c("padNumber")(a.dateMinutes,2);break;case"s":h=c("padNumber")(a.dateSeconds,2);break;case"X":h=c("padNumber")(a.dateMilliseconds,3);break;default:h=b}return{idx:g,rendered:String(h)}}g["default"]=a}),98);
__d("intlRenderCLDRDate",["CLDRDateFormatConfig","intlRenderJSDateSymbol","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=/\w+/;function a(a,c,d){var e=b("CLDRDateFormatConfig").intlDateSpecialChars,f="",g="",i=!1,j=[],k;a=a.split(e.cldrDelimiter+e.singleQuote).join(e.singleQuoteHolder);for(var l=0,m=a.length;l<m;l++){var n=a.charAt(l);!i?n===e.cldrDelimiter?i=!0:f.length===0||f[0]===n?f+=n:n===e.singleQuoteHolder?f+=e.singleQuote:(k=h(f,d,c),j.push(k.rendered),f=n):(f.length!==0&&(k=h(f,d,c),j.push(k.rendered),f=""),n===e.cldrDelimiter?(i=!1,j.push(g),g=""):n===e.singleQuoteHolder?g+=e.singleQuote:g+=n)}if(g.length!==0)throw b("unrecoverableViolation")('Format: "'+a+'" must contain closing str literal delimiter',"internationalization");f.length!==0&&(k=h(f,d,c),j.push(k.rendered));return j.join("")}function h(a,c,d){a=i(a);return b("intlRenderJSDateSymbol")(c,a,d)}function i(a){if(a in b("CLDRDateFormatConfig").CLDRToPHPSymbolConversion)return b("CLDRDateFormatConfig").CLDRToPHPSymbolConversion[a];if(g.test(a))throw b("unrecoverableViolation")('Unsupported CLDR symbol: "'+a+'". If string literal, wrap in delimiters',"internationalization");return a}e.exports=a}),null);
__d("formatDate",["CLDRDateFormatConfig","CLDRDateRenderingClientRollout","DateFormatConfig","FBLogger","IntlDateStringsTypedLoggerLite","IsInternSite","Random","getCLDRLocalizedFormat","intlGetDateNumerics","intlRenderCLDRDate","intlRenderJSDateSymbol","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";a=Object.freeze({today:null,yesterday:null,thisWeek:null,thisMonth:null,thisYear:null,withinDay:null,withinWeek:null,withinMonth:null,withinYear:null,older:null,future:null,allOtherTimes:null});function h(a,b,d){a=a;d=d||{skipSuffixLocalization:!1,skipPatternLocalization:!1,utc:!1,formatInternal:!1,throwCLDRError:!1};if(b==null||b===""||a==null||!(a||a===0))return"";typeof a==="string"&&(isNaN(Number(a))&&c("FBLogger")("i18n-formatDate").event("date_string_must_be_timestamp").blameToPreviousFile().mustfix("The date passed to formatDate is a string, but not a timestamp. formatDate expects strings to be a string representation of a Unix "+('timestamp but was passed "'+a+'"')),a=parseInt(a,10));typeof a==="number"&&(a=new Date(a*1e3));if(!(a instanceof Date))throw c("unrecoverableViolation")("The date passed to formatDate must be either a unix timestamp or JavaScript date object.","internationalization");if(isNaN(a.getTime()))throw c("unrecoverableViolation")("Invalid date passed to formatDate","internationalization");a.getTime()>=1e15&&c("FBLogger")("i18n-formatDate").event("date_too_far_in_future").blameToPreviousFile().info("The date passed to formatDate is too far in the future. Did you mix up milliseconds/seconds?");b=k(a,b);a=c("intlGetDateNumerics")(a,d);return i(b,a,d)}h.DEFAULT_FORMAT="M j, Y g:i A";h.periodNames=Object.freeze(Object.keys(a));function i(a,b,d){var e=a,f=!!d.skipPatternLocalization,g=d.formatInternal===!0;if(!f&&(g||!c("IsInternSite").is_intern_site))if(a in c("CLDRDateFormatConfig").supportedPHPFormatsKeys)try{f=c("CLDRDateFormatConfig").supportedPHPFormatsKeys[a];g=c("getCLDRLocalizedFormat")(f);m(a,f,g);return c("intlRenderCLDRDate")(g,d,b)}catch(a){c("FBLogger")("i18n-formatDate").event("CLDR_date_format_render_error").blameToPreviousFile().catching(a).mustfix("CLDR date format render error");if(d.throwCLDRError===!0)throw a}else if(c("DateFormatConfig").formats[a])e=c("DateFormatConfig").formats[a],m(a);else if(!c("IsInternSite").is_intern_site)if(a.length!==1)throw c("unrecoverableViolation")("Trying to localize an unsupported date format: `"+a+"`","internationalization");return j(e,d,b)}function j(a,b,d){var e=[];for(var f=0;f<a.length;f++){var g=a.charAt(f);g=c("intlRenderJSDateSymbol")(d,g,b,a,f);e.push(g.rendered);f=g.idx}return e.join("")}function k(a,b){var d=h.DEFAULT_FORMAT;if(typeof b==="string")return b;else if(typeof b==="object"){var e=a.getTime();for(var f=l(),g=Array.isArray(f),i=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j;if(g){if(i>=f.length)break;j=f[i++]}else{i=f.next();if(i.done)break;j=i.value}j=j;var k=b[j.name];if(k!=null&&j.start<=e&&e<j.end)return k}c("FBLogger")("i18n-formatDate").event("matching_period_format_not_found").blameToPreviousFile().warn('Matching period not found for date "%s", using default format "%s". Current timestamp: "%s"',e,d,Date.now());return d}else{c("FBLogger")("i18n-formatDate").event("invalid_format_argument").blameToPreviousFile().warn('Called with invalid format "%s" (type: %s) for date "%s", using default: %s',b,typeof b,a.getTime(),d);return d}}function l(){var a=new Date(),b=a.getTime(),d=a.getFullYear(),e=a.getMonth(),f=new Date(d,a.getMonth()+1,0).getDate(),g=new Date(d,1,29).getMonth()===1?366:365,h=1e3*60*60*24,i=new Date(a.setHours(0,0,0,0)),j=new Date(d,e,i.getDate()+1);a=a.getDate()-(a.getDay()-c("DateFormatConfig").weekStart+6)%7;var k=new Date(b).setDate(a);a=new Date(b).setDate(a+7);var l=new Date(d,e,1);e=new Date(d,e,f+1);var m=new Date(d,0,1);d=new Date(d+1,0,1);return[{name:"today",start:i.getTime(),end:j.getTime()},{name:"withinDay",start:b-h,end:b+h},{name:"yesterday",start:i.getTime()-h,end:i.getTime()-1},{name:"thisWeek",start:k,end:a},{name:"withinWeek",start:b-h*7,end:b+h*7},{name:"thisMonth",start:l.getTime(),end:e.getTime()},{name:"withinMonth",start:b-h*f,end:b+h*f},{name:"thisYear",start:m.getTime(),end:d.getTime()},{name:"withinYear",start:b-h*g,end:b+h*g},{name:"older",start:-Infinity,end:b},{name:"future",start:b,end:+Infinity},{name:"allOtherTimes",start:-Infinity,end:+Infinity}]}function m(a,b,d){b===void 0&&(b=null),d===void 0&&(d=null),c("Random").random()<c("CLDRDateRenderingClientRollout").formatDateClientLoggerSamplingRate&&c("IntlDateStringsTypedLoggerLite").log({datetime_format:a,logged_from_client:!0,cldr_key:b,cldr_value:d})}b=h;g["default"]=b}),98);
__d("CometTimestamp.react",["fbt","formatDate","react","useServerTime"],(function(a,b,c,d,e,f,g,h){"use strict";e=d("react");var i=1e3*60*60*24,j=i*30;function k(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}function l(a,b){return h._("le {date} \u00e0 {time}",[h._param("date",a),h._param("time",b)])}function m(a,b){var d=c("formatDate")(b,"g:i A");if(k(b,a))return h._("Aujourd\u2019hui, \u00e0 {time}",[h._param("time",d)]);var e=new Date(a.valueOf()-i);if(k(b,e))return h._("Hier, \u00e0 {time}",[h._param("time",d)]);e=new Date(a.valueOf()+i);if(k(b,e))return h._("Demain, \u00e0 {time}",[h._param("time",d)]);e=c("formatDate")(b,"F j");a.getFullYear()!==b.getFullYear()&&(e=c("formatDate")(b,"F j, Y"));return Math.abs(a.valueOf()-b.valueOf())<j?l(e,d):e}function a(a){return l(c("formatDate")(a,"l, F j, Y"),c("formatDate")(a,"g:i A"))}function b(a){a=a.date;var b=c("useServerTime")();b=m(b,a);return b}b.displayName=b.name+" [from "+f.id+"]";b.getTimestamp=m;b.getAbsoluteTimestamp=a;g["default"]=b}),98);
__d("Dots3HorizontalFilled20.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs("svg",babelHelpers["extends"]({fill:"currentColor",viewBox:"0 0 20 20",width:"1em",height:"1em"},a,{children:[a.title!=null&&h.jsx("title",{children:a.title}),a.children!=null&&h.jsx("defs",{children:a.children}),h.jsx("g",{fillRule:"evenodd",transform:"translate(-446 -350)",children:h.jsx("path",{d:"M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("Dots3HorizontalFilled20IconSvg.react",["Dots3HorizontalFilled20.svg.react","SVGIcon"],(function(a,b,c,d,e,f,g){"use strict";a=d("SVGIcon").svgIcon(c("Dots3HorizontalFilled20.svg.react"));g["default"]=a}),98);
__d("CometRefineRef",[],(function(a,b,c,d,e,f){"use strict";function a(a){return function(b){if(a==null)return;typeof a==="function"?a(b):typeof a==="object"&&(a.current=b)}}f["default"]=a}),66);
__d("useTriggeredStoryCTAHandler",["CometFeedStoryCallToActionTriggerContext","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useContext;function a(){var a=i(c("CometFeedStoryCallToActionTriggerContext")),b=h(function(b){var c=Object.prototype.hasOwnProperty.call(a.triggeredBumperRegistry,b);c&&a.setTriggeredEvent(b)},[a]);return[b]}g["default"]=a}),98);
__d("CometFutureOfFeedStoryContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({aspectRatioUpdate:-1,shouldOverlayHeaderOverAttachment:!1,shouldPutBodyTextBelowAttachment:!1,webReshareVariant:"normal"});g["default"]=b}),98);
__d("CometFeedStoryMetaSectionMiddot.react",["CometFutureOfFeedStoryContext","CometMiddot.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j={root:{":first-child_display":"xh99ass",$$css:!0},white:{color:"x14ctfv",$$css:!0}};function a(){var a=i(c("CometFutureOfFeedStoryContext"));a=a.shouldOverlayHeaderOverAttachment;return h.jsx("span",{className:c("stylex")([j.root,a&&j.white]),children:h.jsx(c("CometMiddot.react"),{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryMenu.entrypoint",["CometFeedStoryMenuQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.feedLocation,e=a.id,f=a.renderLocation,g=a.serializedFRTPIdentifiers;a=a.storyDebugInfo;return{extraProps:{originalStoryID:e},queries:{menuQueryReference:{parameters:b("CometFeedStoryMenuQuery$Parameters"),variables:{feed_location:c,id:e,renderLocation:f,scale:d("WebPixelRatio").get(),serialized_frtp_identifiers:g,story_debug_info:a}}}}},root:c("JSResourceForInteraction")("CometFeedStoryMenu.react").__setRef("CometFeedStoryMenu.entrypoint")};g["default"]=a}),98);
__d("CometFeedStoryMenuSectionBase.react",["CometActivityLogUtils","CometEntryPointPopoverTrigger.react","CometFeedStoryMenu.entrypoint","CometStoryRenderLocationContext.react","CometTrackingNodeProvider.react","ProfileCometContext","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=c("requireDeferred")("ContentAccessAndControlEventType").__setRef("CometFeedStoryMenuSectionBase.react"),k=c("requireDeferred")("ContentAccessAndControlFalcoEvent").__setRef("CometFeedStoryMenuSectionBase.react");function a(a){var b=a.feedLocation,e=a.id,f=a.onEdit,g=a.onPopoverVisibilityChange,l=a.outerWrapperRenderer,m=a.popoverPosition,n=a.renderLocation,o=a.serializedFRTPIdentifiers,p=a.storyDebugInfo,q=a.triggerChildRenderer;a=a.variables;var r=i(c("ProfileCometContext"));r=r.isInViewAs;var s=i(c("CometStoryRenderLocationContext.react"));if(e==null)return null;if(b==="GROUP_ADMIN_TO_MEMBER_FEEDBACK")return null;if(b==="ACTOR_GATEWAY")return null;if(r)return null;o=h.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:55,children:h.jsx(c("CometEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:{feedLocation:b,id:e,renderLocation:n,serializedFRTPIdentifiers:o,storyDebugInfo:p},onVisibilityChange:g,otherProps:{feedLocation:b,onEdit:f,renderLocation:n,variables:a},popoverEntryPoint:c("CometFeedStoryMenu.entrypoint"),popoverType:"menu",position:(r=m)!=null?r:"below",preloadTrigger:"button",tracePolicy:"comet.feed.story.menu",children:function(a,b,c,f,g,h){return q({contextRef:a,id:e,onHoverInPrerenderer:f,onHoverOutPrerenderer:g,onPress:function(){(s===d("CometActivityLogUtils").getStoryRenderLocationKeyForTimeline()||s===d("CometActivityLogUtils").getStoryRenderLocationKeyForHomepage())&&k.onReady(function(a){var b=j.getModuleIfRequireable();if(b==null)return;a.log(function(){return{event:b.IMPRESSION,is_access:!0,is_bulk:!1,is_control:!1,surface:d("CometActivityLogUtils").getPrivacyLoggingSourceFromStoryRenderLocation(s)}})}),b()},onPressInPrerenderer:h})}})});return l!=null?l({contents:o}):o}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryMenuSection.react",["fbt","CometFeedStoryMenuSectionBase.react","Dots3HorizontalFilled20IconSvg.react","TetraIcon.react","emptyFunction","mergeRefs","nux:108","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useCallback,k={root:{alignSelf:"xqcrz7y",display:"x78zum5",height:"x1qx5ct2",paddingTop:"x1y1aw1k",paddingEnd:"x1sxyh0",paddingBottom:"xwib8y2",paddingStart:"xurb0ha",width:"xw4jnvo",$$css:!0},tooltipWithMaxWidth:{maxWidth:"x1jkqq1h",$$css:!0}},l=i.forwardRef(function(a,b){var d=a.additionalOnPressHandler,e=a.onPress;a=babelHelpers.objectWithoutPropertiesLoose(a,["additionalOnPressHandler","onPress"]);var f=j(function(a){d&&d(),e&&e(a)},[d,e]);return i.jsx(c("TetraIcon.react"),babelHelpers["extends"]({},a,{onPress:f,ref:b}))}),m=(e=b("nux:108")==null?void 0:b("nux:108")("who_can_comment_upsell_nux"))!=null?e:c("emptyFunction");function a(a){var b=a.additionalIconWrapperRef,d=a.additionalOnPressHandler,e=a.color,f=a.isPostHarassed,g=a.onEdit,n=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["additionalIconWrapperRef","additionalOnPressHandler","color","isPostHarassed","onEdit","xstyle"]);var o=j(function(a){var f,g=a.contextRef,j=a.id;j=a.onHoverInPrerenderer;var k=a.onHoverOutPrerenderer,m=a.onPress;a=a.onPressInPrerenderer;return i.jsx(l,{additionalOnPressHandler:d,"aria-label":h._("Actions pour cette publication"),color:(f=e)!=null?f:"secondary",icon:c("Dots3HorizontalFilled20IconSvg.react"),onHoverIn:j,onHoverOut:k,onPress:m,onPressIn:a,ref:c("mergeRefs")(g,b),size:20,testid:void 0})},[d,e,b]),p=m({align:"end",arrowStyle:"edge",hasCloseButton:!0,label:h._("Vous pouvez choisir qui peut commenter cette publication."),xstyle:k.tooltipWithMaxWidth},(f=f)!=null?f:!1);f=j(function(a){a=a.contents;return i.jsx("div",{className:c("stylex")(k.root,n),children:i.jsx("div",{ref:p,children:a})})},[n,p]);return i.jsx(c("CometFeedStoryMenuSectionBase.react"),babelHelpers["extends"]({onEdit:g,outerWrapperRenderer:f,triggerChildRenderer:o},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUnauthenticatedUFIUtils",["qex"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a;return(a=c("qex")._("709"))!=null?a:!1}function b(a){return a===null?!1:a==="unauthenticated_group_post_share"}function d(){var a;return(a=c("qex")._("1799"))!=null?a:!1}g.shouldEnableLoggedOutSharing=a;g.shouldShowLoggedOutShareOptions=b;g.shouldDisableCometLoggedOutLink=d}),98);
__d("baseTextTransformAllStrings",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function i(a){return(a==null?void 0:a.type)===h.Fragment&&typeof (a==null?void 0:(a=a.props)==null?void 0:a.children)==="string"}function j(a,b,c,d){c===void 0&&(c=3);d===void 0&&(d=0);var e=0;if(typeof a==="string"){var f=a;return b(f,d+"-"+e++)}else if(Array.isArray(a))return a.map(function(a,f){if(i(a))return h.cloneElement(a,{children:b(a.props.children,d+"-"+e++)});return d<c?j(a,b,c,d+1):a});else if(a!=null&&typeof a==="object"){f=h.Children.only(a);if(i(f))return h.cloneElement(f,{children:b(f.props.children,d+"-"+e++)})}return a}j.displayName=j.name+" [from "+f.id+"]";g["default"]=j}),98);
__d("CometShortenedExternalUrlEntityRenderer",["fbt","CAAWebClientLoggingEventSource","CometFeedCurrentGroupContext","CometLink.react","CometShortenedExternalUrlEntityRenderer_entity.graphql","CometUnauthenticatedUFIUtils","RelayHooks","cr:2169","cr:3118","cr:3119","cr:3258","cr:3749","emptyFunction","isValidURL","memoizeStringOnly","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useContext,l=c("memoizeStringOnly")(c("isValidURL")),m=60;i!==void 0?i:i=b("CometShortenedExternalUrlEntityRenderer_entity.graphql");function n(a){var e=a.entity,f=a.node;a=a.originalText;var g=String(k(c("CometFeedCurrentGroupContext"))),i=g==null?void 0:g.toLowerCase().includes("deal");g=h._("En voir plus de {Group name}",[h._param("Group name",g)]);var n=c("emptyFunction")({dialogSource:d("CAAWebClientLoggingEventSource").CAAWebClientLoggingDialogSource.EXTERNAL_URL,title:g});g=d("RelayHooks").useActorID();g=g==="0";e=e.external_url;if(e==null||a==null)return f;if(b("cr:3749")!=null&&b("cr:3258")!=null){var o=b("cr:3258").extractDataFromGenericLinkUrl(e);if(o!=null)return j.jsx(b("cr:3749"),{data:o.data,type:o.type})}if(b("cr:3118")!==null&&b("cr:3119")!==null&&b("cr:3119").isPixelcloudLink(e)){o=b("cr:3119").pixelcloudInlineLink(a);if(o!==null)return j.jsx(b("cr:3118"),{location:"FEED",pixelcloudID:o,pixelcloudURL:e})}if(!l(a))return f;if(!e.endsWith(a)&&!e.startsWith(a))return f;if(g&&i!==void 0&&i&&d("CometUnauthenticatedUFIUtils").shouldDisableCometLoggedOutLink())return j.jsx(c("CometLink.react"),{onClick:function(a){if(typeof n!=="function")return;n();a.preventDefault()},children:h._("Connectez-vous pour voir le lien")});o=b("cr:2169")(e,m);return o.length<a.length?o:f}a=function(a,b,c,d){return j.jsx(n,{entity:b,node:a,originalText:d})};g["default"]=a}),98);
__d("CometEmojiTransform",["CometEmojiWithContextualSize.react","EmojiRenderer","baseTextTransformAllStrings","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a===void 0?{}:a;var b=a.size;return function(a){var e=0;return c("baseTextTransformAllStrings")(a,function(a,f){return d("EmojiRenderer").render(a,function(a){return h.jsx(c("CometEmojiWithContextualSize.react"),{emoji:a,size:b},f+"-"+e++)})})}}g["default"]=a}),98);
__d("CometLineBreakTransform",["baseTextTransformAllStrings","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=function(a,b){var d=0;return c("baseTextTransformAllStrings")(a,function(a,b){return a.split("\n").reduce(function(a,c,e){return e===0?[].concat(a,[c]):[].concat(a,[h.jsx("br",{},b+"-"+d++),c])},[])})};g["default"]=a}),98);
__d("CometUFIQPLInstanceKeyContext",["react"],(function(a,b,c,d,e,f,g){"use strict";d("react");a=d("react").createContext;b=a(0);c=b;g["default"]=c}),98);
__d("getReferrerURI",["ErrorGuard","URI","isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";function b(){if(a.PageTransitions&&a.PageTransitions.isInitialized())return a.PageTransitions.getReferrerURI();else{var b=c("ErrorGuard").applyWithGuard(function(a){return c("URI").tryParseURI(a)},null,[document.referrer]);return b&&c("isFacebookURI")(b)?b:null}}g["default"]=b}),98);
__d("URITruncator",["fbt","URI"],(function(a,b,c,d,e,f,g,h){var i=3,j=h._("...").toString(),k=j.length;function a(a,b){if(!a)return a;var d=a.toString();if(b===void 0||b<=k)return d;if(d.length<=b||d.length<=k)return d;d=c("URI").tryParseURI(a);if(!d)return a.toString().substring(0,b-k)+j;a=d.getOrigin();if(a.length>b-k)return a.substring(0,b-k)+j;var e=!1;if(d.getFragment()){e=!0;d.setFragment("");if(d.toString().length<=b-k)return d.toString()+j}var f=d.getQueryData();if(f){f=Object.keys(f);if(f.length>0){e=!0;for(var g=f.length-1;g>=0;g--){d.removeQueryData(f[g]);if(d.toString().length<=b-k)return d.toString()+j}}}g=d.getPath()+(e?j:"");f=g.split("/");d=a.length+g.length-b;e=0;while(d>0&&f.length>e+1){g=e+1;var h=f[g];if(d+k+i<=h.length){var l=h.length-1,m=h.length-d-k,n=/[a-zA-Z0-9]/;d+=k;while(d>0){while(l>0&&n.test(h[l]))l--,d--;while(l>0&&!n.test(h[l]))l--,d--}l===0&&(l=m-1);f[g]=h.substring(0,l+1)+j}else e++,d-=h.length,e===1?d+=k:d--}e>0&&(f[f.length-1].length===0&&f.length===e+2&&e++,f.splice(1,e,j));n=a+f.join("/");n.length>b&&(n=n.substring(0,b-k)+j);return n}f.exports=a}),34);
__d("intlSummarizeNumber",["FbtNumberType","IntlCompactDecimalNumberFormatConfig","IntlVariations","intlNumUtils"],(function(a,b,c,d,e,f,g){var h=3,i=14,j={ROUND:"ROUND",TRUNCATE:"TRUNCATE"},k={SHORT:"SHORT",LONG:"LONG"};function a(a,b,d,e){d===void 0&&(d=k.SHORT);e===void 0&&(e=j.ROUND);d=c("IntlCompactDecimalNumberFormatConfig")[d===k.SHORT?"short_patterns":"long_patterns"];var f=a===0?0:Math.floor(Math.log10(Math.abs(a)));f>i&&(f=i);var g=l(a,f,b,e,d),m=g[0],n=g[1];g=g[2];if(g){f+=1;g=l(a,f,b,e,d);m=g[0];n=g[1];g[2]}e=c("FbtNumberType").getVariation(m)||c("IntlVariations").NUMBER_OTHER;g=f.toString();g=d==null?void 0:(d=d[g])==null?void 0:d[e.toString()];if(!g||f<h||g.positive_prefix_pattern===""&&g.positive_suffix_pattern===""){d=b===void 0?0:b;return c("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}return g&&g.min_integer_digits===0&&m===1?g.positive_prefix_pattern+g.positive_suffix_pattern:(g&&g.positive_prefix_pattern||"")+c("intlNumUtils").formatNumberWithThousandDelimiters(m,n)+(g&&g.positive_suffix_pattern||"")}function l(a,b,d,e,f){var g=b.toString();g=f==null?void 0:(f=f[g])==null?void 0:f[c("IntlVariations").NUMBER_OTHER.toString()];f=g&&g.min_integer_digits||b+1;var h=b-f+1;h=Math.abs(a)/Math.pow(10,h);var k=d!=null;d=k?d:g&&g.min_fraction_digits;d==null&&(d=b>2?1:0);g=e===j.TRUNCATE?c("intlNumUtils").truncateLongNumber(h.toString(),d):h.toFixed(d);e=parseFloat(g)*(a<0?-1:1);return[e,e%1===0&&!k?0:d,g.length>f+(d>0?d+1:0)+(h>=0?0:1)&&b<i]}g["default"]=a}),98);