$scope.$watch('myText', function(text) {
    // no text, no count
    if(!text) {
        $scope.wordCount = 0;
    } 
    // search for matches and count them
    else {
        var matches = text.match(/[^\s\n\r]+/g);
        $scope.wordCount = matches ? matches.length : 0;
    }
});