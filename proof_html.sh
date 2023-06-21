#!/bin/bash
#set -e # Need to fail on error
set +e # Do not fail on error for now, we are stil building
#
# Prerequisites
# apt-get update -y
# apt-get install python3-pip libcurl4 -y
# pip3 install html5validator 
# gem install --no-document html-proofer

TIDY_OUT=/tmp/tidy_out.$$

echo "*** Internal link check ***"
export LANG=en_US.UTF-8
htmlproofer \
	--disable_external \
	--allow-hash-href  \
	--ignore-urls="" \
	--ignore-files="out/admin/index.html" \
	out
(
	find out -path out/admin -prune -o -name "*.html" -exec html5validator "{}" \;
) | tee $TIDY_OUT
ERRORS=$( grep 'error:' $TIDY_OUT | wc -l )
if [[ $ERRORS -gt 0 ]] ; then
	echo "------------------------------------------------------------------------------------"
	echo "There are $ERRORS errors in html files, not good enough!"
	grep 'Error:' $TIDY_OUT
	exit 1
else
	echo "------------------------------------------------------------------------------------"
	echo " HTML checked and found flawles, \0/ \0/ \0/ \0/ \0/ \0/ "
	echo "------------------------------------------------------------------------------------"
fi
