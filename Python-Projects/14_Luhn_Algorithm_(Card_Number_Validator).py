"""Implement the Luhn Algorithm
The Luhn algorithm, also known as the "modulus 10" or "mod 10" algorithm, is a simple checksum formula used to validate a variety of identification numbers, like credit card numbers. These are the steps to validate a number using the Luhn algorithm:

Starting from the right, and excluding the rightmost digit (the check digit), double the value of every other digit.
If the result of doubling a digit is greater than 9, sum the digits to get a single digit. Alternatively, you can subtract 9 from the result.
Take the sum of all the digits including the check digit.
If the sum of all the digits is a multiple of 10, then the number is valid; else it is not valid.
Let's say we have the number 453914881. The steps to validate it using the Luhn algorithm would be:

Account number      4   5   3   9   1   4   8   8   1 
Double every other  4  10   3  18   1   8   8  16   1 
Sum 2-char digits   4   1   3   9   1   8   8   7   1 
Then sum all numbers, 4 + 1 + 3 + 9 + 1 + 8 + 8 + 7 + 1 = 42.
Since 42 is not a multiple of 10, the number is invalid.
In this lab, you will build a credit card validator using the Luhn algorithm.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should define a function named verify_card_number that takes a string of digits (representing a card number) and verifies whether it is valid according to the Luhn algorithm.

Within the verify_card_number function:

You should handle any dashes or spaces that may be present in the card number passed to it.
Return VALID! if the card number is valid; otherwise, return INVALID!.
When you complete the project, you should see the following messages depending on the input:

Card Number	Message
453914889	VALID!
4111-1111-1111-1111	VALID!
1234 5678 9012 3456	INVALID!
Tests:
1. You should have a function named verify_card_number.
2. verify_card_number('453914889') should return VALID!.
3. verify_card_number('4111-1111-1111-1111') should return VALID!.
4. verify_card_number('453914881') should return INVALID!.
5. verify_card_number('1234 5678 9012 3456') should return INVALID!.
6. verify_card_number should return VALID! when called with a valid credit card number.
7. verify_card_number should return INVALID! when called with an invalid credit card number."""

def verify_card_number(card_number):
    # removing any dashes or spaces from number string
    clean_number = card_number.replace("-","").replace(" ","")

    # to process from right to left reversing the digits
    reversed_digits = clean_number[::-1] #now ,rightmost digit at idx-0

    total_sum = 0

    for idx,char in enumerate(reversed_digits):
        # converting char to integer
        digit = int(char)

        # now, I have to double every 2nd digit (odd indices:1,3,5...)
        if idx % 2 == 1:
            doubled_digit = digit*2

            # if doubled value is greater than 9, I have to sum its digits
            """Note: According to mathematics, substracting 9 is identical to summing the digits of a 2-digit number. For eg:(13-9 = 4 == 1+3), (17-9 = 8 == 1+7)"""

            if doubled_digit > 9:
                doubled_digit -= 9

            total_sum += doubled_digit
        else:
            # for even indices no need to double, just adding the digit
            total_sum += digit

    if total_sum % 10 == 0:
        return "VALID!"
    else:
        return "INVALID!"