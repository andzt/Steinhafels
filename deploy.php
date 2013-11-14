<?php
$commands = array(
	'git pull',
	'git status',
);
// Run the commands for output
$output = '';
foreach($commands AS $command){
	$tmp = shell_exec($command);
	$output .= "<span style=\"color: #6BE234;\">\$</span> <span style=\"color: #729FCF;\">{$command}\n</span>";
	$output .= htmlentities(trim($tmp)) . "\n";
}
print $output;
?>