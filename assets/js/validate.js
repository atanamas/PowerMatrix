function allnumeric(input)
{
	var numbers = /^[0-9]+$/;
	if(input.value.match(numbers))
	{
		return true;
	}
	else
	{
		alert('Please input numeric characters only');
		return false;
	}
}