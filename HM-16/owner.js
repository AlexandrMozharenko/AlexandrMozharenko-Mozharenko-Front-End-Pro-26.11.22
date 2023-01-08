"use strict"
function Owner (oName, oAge) {
    this.name = oName;
    this.age = oAge;

    this.showOwner = function() {
        document.write('<p>' + 'Ім`я власника:' + this.name + '<br/>' +
        'Вік власника: ' + this.age + '</p>');
    };
}
