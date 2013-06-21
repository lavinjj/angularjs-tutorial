## Applies to
.NET Framework 2.0
C#
## Summary
The purpose of this code snippet is to illustrate the use of regular expressions to perform validation of user input within an application. Many common attack vectors make use of malicious input data and rely on poor or nonexistent validation of user-supplied input in order to successfully exploit application vulnerabilities.

These following validation routines make use of regular expressions to ensure that input accepted by an application conforms to predetermined and expected character syntax requirements. This practice is sometimes called "whitelist" validation and is ideally suited to the use of regular expressions.

## Objectives
Defend against common security attacks by validating that user input data meets known-valid syntax requirements
Define a set of reusable code-based validation methods that can be reused within different applications or application components
## Scenarios
Application makes use of user input in any form, whether in processing operations, storage or database queries.
Application makes use of data that comes from any other untrusted source, such as a third-party data feed or file upload.
Application does not already make use a validation scheme for input data.
## Solution Example
The solution example defines 16 regular expression validation functions and a helper method that address a common set of application input data types. The regular expression validation functions are:

        IsValidUserName                        IsValidCCNumber
        IsValidPassword                        IsValidSSN
        IsValidName                        IsValidEmailAddress
        IsValidStreetAddress                IsValidURL
        IsValidCity                        IsValidIPAddress
        IsValidUSState                        IsValidAlphaText
        IsValidZIPCode                        IsValidAlphaNumericText
        IsValidUSPhoneNumber                IsValidNumericText


        // Decomposed method which actually creates the pattern object and determines the match.
        // Used by all of the other functions.
        static bool MatchString(string str, string regexstr)
        {
                    str = str.Trim();
                    System.Text.RegularExpressions.Regex pattern = new System.Text.RegularExpressions.Regex(regexstr);


                    return pattern.IsMatch(str);
        }


        static bool IsValidUserName(string strUsername)
        {
                    // Allows word characters [A-Za-z0-9_], single quote, dash and period
                    // must be at least two characters long and less then 128
                    string regExPattern = @"^[\w-'\.]{2,128}$";


                    // We also permit email address characters in user name. Set to false
                    // if you don't permit email addresses as usernames.
                    bool allowEmailUsernames = true;


                    if (allowEmailUsernames)
                    {
                        return (MatchString(strUsername, regExPattern) || IsValidEmailAddress(strUsername));
                    }
                    else
                    {
                                return MatchString(strUsername, regExPattern);
                    }
        }


        static bool IsValidPassword(string strPassword)
        {
                    // Allows any type of character


                    // If complexity is enabled, the password must be longer
                    // and contain at least one uppercase, one lowercase,
                    // one numeric and one symbolic character. Set to false
                    // if your requirements differ.
                    bool passwordComplexity = true;


                    // These are some proposed minimum password lengths. If
                    // complexity is enabled (above), the stronger (longer)
                    // minimum password rule applies.
                    int minPasswordLen = 6;
                    int strongPasswordLen = 8;


                    if(passwordComplexity) {
                        string regExPattern = @"^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#\$%\^\&\*\(\)-_\=\+\[\{\]\}\\\|;:',<\.>/?]).*$";
                        return(strPassword.Length >= strongPasswordLen &&
                            MatchString(strPassword, regExPattern));
                    } else {
                                return(strPassword.Length >= minPasswordLen);
                    }
        }


        static bool IsValidName(string strName)
        {
                    // Allows alphabetical chars, single quote, dash and space
                    // must be at least two characters long and caps out at 128 (database size)
                    string regExPattern = @"^[a-zA-Z-'\.\s]{2,128}$";
                    return MatchString(strName, regExPattern);
        }


        static bool IsValidStreetAddress(string strAddress)
        {
                    // Since so many different types of address formats we're just going to swing the bat at
                    // this one for now and do a match against a series of digits (potentially containing
                    // punctuation), followed by a series of characters representing the street name and then
                    // potentially a type of street and unit number
                    string regExPattern = @"\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}(\s[a-zA-Z]{2,15})?([#\.0-9a-zA-Z]*)?";
                    return MatchString(strAddress, regExPattern);
        }


        static bool IsValidCity(string strCity)
        {
                    // Here we simply treat city names like people names and defer to our name validation function.
                    return IsValidName(strCity);
        }


        static bool IsValidUSState(string strState)
        {
                    // Names of 50 US States
                    string[] stateNames=         {"ALABAMA","ALASKA","ARIZONA","ARKANSAS","CALIFORNIA","COLORADO","CONNECTICUT","DELAWARE","FLORIDA","GEORGIA","HAWAII","IDAHO","ILLINOIS","INDIANA","IOWA","KANSAS","KENTUCKY","LOUISIANA","MAINE","MARYLAND","MASSACHUSETTS","MICHIGAN","MINNESOTA","MISSISSIPPI","MISSOURI","MONTANA","NEBRASKA","NEVADA","NEW HAMPSHIRE","NEW JERSEY","NEW MEXICO","NEW YORK","NORTH CAROLINA","NORTH DAKOTA","OHIO","OKLAHOMA","OREGON","PENNSYLVANIA","RHODE ISLAND","SOUTH CAROLINA","SOUTHDAKOTA","TENNESSEE","TEXAS","UTAH","VERMONT","VIRGINIA","WASHINGTON","WEST VIRGINIA","WISCONSIN","WYOMING"};
            // Postal codes of 50 US States
            string[] stateCodes =         {"AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"};




            // This one is somewhat easier because we have a finite set of values to check against.
            // We simply uppercase our value anc check against our list.
            strState = strState.ToUpper();


            ArrayList stateCodesArray = new ArrayList(stateCodes);
            ArrayList stateNamesArray = new ArrayList(stateNames);


            return (stateCodesArray.Contains(strState) || stateNamesArray.Contains(strState));
        }


        static bool IsValidZIPCode(string strZIP)
        {
                    // Allows 5 digit, 5+4 digit and 9 digit zip codes
                    // must be at least two characters long and caps out at 128 (database size)
                    string regExPattern = @"^(\d{5}-\d{4}|\d{5}|\d{9})$";
                    return MatchString(strZIP, regExPattern);
        }


        static bool IsValidUSPhoneNumber(string strPhone)
        {
                    // Allows phone number of the format: NPA = [2-9][0-8][0-9] Nxx = [2-9][0-9][0-9] Station = [0-9][0-9][0-9][0-9]
                    string regExPattern = @"^[01]?[- .]?(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?\d{3}[- .]?\d{4}$";
                    return MatchString(strPhone, regExPattern);
        }


        static bool IsValidCCNumber(string strCCNumber)
        {
                    // This expression is basically looking for series of numbers confirming to the standards
                    // for Visa, MC, Discover and American Express with optional dashes between groups of numbers
                    string regExPattern = @"^((4\d{3})|(5[1-5]\d{2})|(6011))-?\d{4}-?\d{4}-?\d{4}|3[4,7][\d\s-]{15}$";
                    return MatchString(strCCNumber, regExPattern);
        }

        static bool IsValidSSN(string strSSN)
        {
                    // Allows SSN's of the format 123-456-7890. Accepts hyphen delimited SSN’s or plain numeric values.
                    string regExPattern = @"^\d{3}[-]?\d{2}[-]?\d{4}$";
                    return MatchString(strSSN, regExPattern);
        }


        static bool IsValidEmailAddress(string strEmail)
        {
                    // Allows common email address that can start with a alphanumeric char and contain word, dash and period characters
                    // followed by a domain name meeting the same criteria followed by a alpha suffix between 2 and 9 character lone
                    string regExPattern = @"^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$";
                    return MatchString(strEmail, regExPattern);
        }


        static bool IsValidURL(string strURL)
        {
                    // Allows HTTP and FTP URL's, domain name must start with alphanumeric and can contain a port number
                    // followed by a path containing a standard path character and ending in common file suffixies found in URL's
                    // and accounting for potential CGI GET data
                    string regExPattern = @"^^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&%\$#_=]*)?$";
                    return MatchString(strURL, regExPattern);
        }


        static bool IsValidIPAddress(string strIP)
        {
                    // Allows four octets of numbers that contain values between 4 numbers in the IP address to 0-255 and are separated by periods
                    string regExPattern = @"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";
                    return MatchString(strIP, regExPattern);
        }


        static bool IsValidAlphaText(string strAlpha)
        {
                    // Allows one or more alphabetical characters. This is a more generic validation function.
                    string regExPattern = @"^[A-Za-z]+$";
                    return MatchString(strAlpha, regExPattern);
        }


        static bool IsValidAlphaNumericText(string strAlphaNum)
        {
                    // Allows one or more alphabetical and/or numeric characters. This is a more generic validation function.
                    string regExPattern = @"^[A-Za-z0-9]+$";
                    return MatchString(strAlphaNum, regExPattern);
        }


        static bool IsValidNumericText(string strNumeric)
        {
                    // Allows one or more positive or negative, integer or decimal numbers. This is a more generic validation function.
                    string regExPattern = @"/[+-]?\d+(\.\d+)?$";
                    return MatchString(strNumeric, regExPattern);
        }

## Test Case
The following classes must be included in any project making use of the sample code provided above:

        using System.Collections;
        using System.Collections.Generic;
        using System.Text;
        using System.Text.RegularExpressions;

The test case illustrates the user of all 16 of the defined regular expression validation functions:

        static void Main(string[] args)
        {
                   // Validate some usernames
                   Console.WriteLine("Jonathan is a valid username: " + IsValidUserName("Jonathan").ToString());
                   Console.WriteLine("Jonathan!'+ is a valid state: " + IsValidUserName("Jonathan!'+").ToString());
                   Console.WriteLine("");


                   // Validate some passwords
                   Console.WriteLine("J0na+han is a valid password: " + IsValidPassword("J0na+han!").ToString());
                   Console.WriteLine("jb is a valid password: " + IsValidPassword("jb").ToString());
                   Console.WriteLine("");


                   // Validate some names
                   Console.WriteLine("Jonathan is a valid name: " + IsValidName("Jonathan").ToString());
                   Console.WriteLine("Jonathan Bailey is a valid name: " + IsValidName("Jonathan Bailey").ToString());
                   Console.WriteLine("Jonathan GT Bailey is a valid name: " + IsValidName("Jonathan GT Bailey").ToString());
                   Console.WriteLine("Shawn O'Brien is a valid name: " + IsValidName("Shawn O'Brien").ToString());
                   Console.WriteLine("Steve Holt! is a valid name: " + IsValidName("Steve Holt!").ToString());
                   Console.WriteLine("");


                   // Validate some street addresses
                   Console.WriteLine("123 Main St. is a valid street address: " + IsValidStreetAddress("123 Main St.").ToString());
                   Console.WriteLine("45-50 South Lake Road is a valid street address: " + IsValidStreetAddress("45-50 South Lake Road").ToString());
                   Console.WriteLine("45-50 South Lake Road #8 is a valid street address: " + IsValidStreetAddress("45-50 South Lake Road #8").ToString());
                   Console.WriteLine("45-50!!! South Lake Road is a valid street address: " + IsValidStreetAddress("45-50!! South Lake Road").ToString());
                   Console.WriteLine("");


                   // Validate some cities
                   Console.WriteLine("Chicago is a valid name: " + IsValidCity("Chicago").ToString());
                   Console.WriteLine("Los Angeles is a valid city name: " + IsValidCity("Los Angeles").ToString());
                   Console.WriteLine("Jones-Parker Corner is a valid city name: " + IsValidCity("Jones-Parker Corner").ToString());
                   Console.WriteLine("(*&(*&ville is a valid name: " + IsValidCity("(*&(*&ville").ToString());
                   Console.WriteLine("");


                   // Validate some states
                   Console.WriteLine("Massachusetts is a valid state: " + IsValidUSState("Massachusetts").ToString());
                   Console.WriteLine("Foobar is a valid state: " + IsValidUSState("Foobar").ToString());
                   Console.WriteLine("");


                   // Validate some ZIP Codes
                   Console.WriteLine("90034 is a valid zip code: " + IsValidUSState("90034").ToString());
                   Console.WriteLine("90034-1234 is a valid zip code: " + IsValidZIPCode("90034-1234").ToString());
                   Console.WriteLine("900345 is a valid zip code: " + IsValidUSState("900345").ToString());
                   Console.WriteLine("");


                   // Validate some US Phone Numbers
                   Console.WriteLine("1-617-555-1212 is a valid US phone number: " + IsValidUSPhoneNumber("1-617-555-1212").ToString());
                   Console.WriteLine("(617) 555-1212 is a valid US phone number: " + IsValidUSPhoneNumber("(617) 555-1212").ToString());
                   Console.WriteLine("617.555.1212 is a valid US phone number: " + IsValidUSPhoneNumber("617.555.1212").ToString());
                   Console.WriteLine("6175551212 is a valid US phone number: " + IsValidUSPhoneNumber("6175551212").ToString());
                   Console.WriteLine("617/555/1212 is a valid US phone number: " + IsValidUSPhoneNumber("617/5551212").ToString());
                   Console.WriteLine("");


                   // Validate some credit card numbers
                   Console.WriteLine("4444-1234-5678-9900 is a valid credit card number: " + IsValidCCNumber("4444-1234-5678-9900").ToString());
                   Console.WriteLine("3718 123456 78900 is a valid credit card number: " + IsValidCCNumber("3718 123456 78900").ToString());
                   Console.WriteLine("1234567890 is a valid credit card number: " + IsValidCCNumber("1234567890").ToString());
                   Console.WriteLine("");


                   // Validate some SSN's
                   Console.WriteLine("123-45-6789 is a valid Social Security Number: " + IsValidSSN("123-45-6789").ToString());
                   Console.WriteLine("987654321 is a valid Social Security Number: " + IsValidSSN("987654321").ToString());
                   Console.WriteLine("123-456 is a valid Social Security Number: " + IsValidSSN("123-456").ToString());
                   Console.WriteLine("");


                   // Validate some email addresses
                   Console.WriteLine("pentest@msn.com is a valid email address: " + IsValidEmailAddress        ("pentest@msn.com").ToString());
                   Console.WriteLine("Jonathan_Bailey-01@mail.msn.com is a valid email address: " +                 IsValidEmailAddress("Jonathan_Bailey-01@mail.msn.com").ToString());
                   Console.WriteLine("Jonathan_Bailey@msn is a valid email address: " +                 IsValidEmailAddress("Jonathan_Bailey@msn").ToString());
                   Console.WriteLine("");


                   // Validate some URL's
                   Console.WriteLine("http://www.microsoft.com is a valid URL: " + IsValidURL                ("http://www.microsoft.com").ToString());
                   Console.WriteLine("https://secure.microsoft.com:443/Default.aspx is a valid URL: " +                 IsValidURL("https://secure.microsoft.com:443/Default.aspx").ToString());
                   Console.WriteLine("ftp://ftp.microsoft.com/download.html#tools is a valid URL: " +                 IsValidURL("ftp://ftp.microsoft.com/download.html#tools").ToString());
                   Console.WriteLine("http://100?arg=val is a valid URL: " + IsValidURL("http://100?        arg=val").ToString());
                   Console.WriteLine("http://= is a valid URL: " + IsValidURL("http://=").ToString());
                   Console.WriteLine("");


                   // Validate some IP Addresses
                   Console.WriteLine("192.168.0.1 is a valid IP Address: " + IsValidIPAddress                ("192.168.0.1").ToString());
                   Console.WriteLine("0.0.0.0 is a valid IP Address: " + IsValidIPAddress                ("192.168.0.1").ToString());
                   Console.WriteLine("300.300.300.300 is a valid IP Address: " + IsValidIPAddress                ("300.300.300.300").ToString());
                   Console.WriteLine("");
                }

## Expected Result
        Jonathan is a valid username: True
        Jonathan!'+ is a valid state: False


        J0na+han is a valid password: True
        jb is a valid password: False


        Jonathan is a valid name: True
        Jonathan Bailey is a valid name: True
        Jonathan GT Bailey is a valid name: True
        Shawn O'Brien is a valid name: True
        Steve Holt! is a valid name: False

        123 Main St. is a valid street address: True

        45-50 South Lake Road is a valid street address: True
        45-50 South Lake Road #8 is a valid street address: True
        45-50!!! South Lake Road is a valid street address: False


        Chicago is a valid name: True
        Los Angeles is a valid city name: True
        Jones-Parker Corner is a valid city name: True
        (*&(*&ville is a valid name: False


        Massachusetts is a valid state: True
        Foobar is a valid state: False


        90034 is a valid zip code: False
        90034-1234 is a valid zip code: True
        900345 is a valid zip code: False

        1-617-555-1212 is a valid US phone number: True

        (617) 555-1212 is a valid US phone number: True
        617.555.1212 is a valid US phone number: True
        6175551212 is a valid US phone number: True
        617/555/1212 is a valid US phone number: False


        4444-1234-5678-9900 is a valid credit card number: True
        3718 123456 78900 is a valid credit card number: True
        1234567890 is a valid credit card number: False

        123-45-6789 is a valid Social Security Number: True

        987654321 is a valid Social Security Number: True
        123-456 is a valid Social Security Number: False


        pentest@msn.com is a valid email address: True
        Jonathan_Bailey-01@mail.msn.com is a valid email address: True
        Jonathan_Bailey@msn is a valid email address: False


        http://www.microsoft.com is a valid URL: True
        https://secure.microsoft.com:443/Default.aspx is a valid URL: True
        ftp://ftp.microsoft.com/download.html#tools is a valid URL: True
        http://100?arg=val is a valid URL: True
        http://= is a valid URL: False

        192.168.0.1 is a valid IP Address: True

        0.0.0.0 is a valid IP Address: True
        300.300.300.300 is a valid IP Address: False
## More Information
As previously stated, this example makes use of "whitelist" validation practices, in which user data is evaluated against a set of known valid characters. "Black list" validation, which evaluates input against a set of known malicious characters or strings, is also a common validation practice. We recommend the use of whitelist validation because new attacks are continually created and may make use of character combinations not publicly known at present.
In addition to input validation, we recommend the use of data output validation to add additional protection against malicious input attacks that execute during presentation.
## See Also
## Related Items