function palindrome(str) {

  var replaced_string= str.replace(/_|,|-/g,'').replace('.','').replace('(',')');
  var lowercased_string= replaced_string.toLowerCase();

  var split_string = lowercased_string.split(" ");

  var join_string = split_string.join("");

  var  split_string_2 = join_string.split("");

  var reverse_string = split_string_2.reverse();

  var join_string_2 = reverse_string.join("");

  if(join_string == join_string_2)

    return true;

  else
 
    return false;

}




palindrome("Your string here");