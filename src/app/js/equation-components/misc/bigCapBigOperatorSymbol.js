eqEd.BigCapBigOperatorSymbol = function(parent) {
    eqEd.BigOperatorSymbol.call(this, parent); // call super constructor.
    this.className = "eqEd.BigCapBigOperatorSymbol";

    this.domObj = this.buildDomObj();

    // Set up the width calculation
    var width = 0;
    this.properties.push(new Property(this, "width", width, {
        get: function() {
            return width;
        },
        set: function(value) {
            width = value;
        },
        compute: function() {
            var fontHeight = this.equation.fontMetrics.height[this.parent.parent.fontSize];
            return 0.71482492204 * this.height;
        },
        updateDom: function() {
            this.domObj.updateWidth(this.width);
        }
    }));
};
(function() {
    // subclass extends superclass
    eqEd.BigCapBigOperatorSymbol.prototype = Object.create(eqEd.BigOperatorSymbol.prototype);
    eqEd.BigCapBigOperatorSymbol.prototype.constructor = eqEd.BigCapBigOperatorSymbol;
    eqEd.BigCapBigOperatorSymbol.prototype.buildDomObj = function() {
        var htmlRep = '<div class="bigOperatorSymbol bigCapBigOperatorSymbol" style="width: 200; height: 279.78879;"><svg style="position: absolute; width: 100%; height: 100%;" viewBox="0 0 200 279.78879" preserveAspectRatio="none"><g transform="translate(-259.34158,-210.57319)"><g><path d="m 352.34201,210.57944 c -11.10773,0.9043 -21.5904,3.34581 -31.44804,7.32454 -9.85778,3.9791 -19.04052,9.47042 -27.54827,16.47397 -8.79949,7.19138 -16.14903,16.00749 -22.04863,26.44835 -5.89965,10.44114 -9.7494,22.55704 -11.54927,36.34773 -0.0642,0.36428 -0.11359,2.61352 -0.14814,6.74773 -0.0346,4.1344 -0.0691,12.76842 -0.1037,25.90208 -0.0346,13.1338 -0.084,33.3819 -0.14814,60.74436 -0.004,32.99791 0.004,56.54642 0.025,70.64558 0.0208,14.09904 0.0792,21.1486 0.17499,21.14868 0.46246,2.3456 1.58739,4.25381 3.37479,5.72464 1.78737,1.47065 3.86224,2.22894 6.22461,2.27486 2.34983,-0.0501 4.39971,-0.80004 6.14962,-2.24986 1.74986,-1.45 2.89979,-3.29988 3.44978,-5.54965 0.0958,-0.0959 0.15413,-7.15379 0.17499,-21.17368 0.0208,-14.02 0.0291,-36.82689 0.025,-68.42072 -0.004,-29.84394 0.004,-52.30085 0.025,-67.3708 0.0208,-15.0698 0.0791,-23.07762 0.17499,-24.02349 1.26655,-15.12811 6.43289,-28.56893 15.49903,-40.32249 9.06604,-11.75328 21.03195,-20.44439 35.89776,-26.07337 4.61629,-1.70389 9.33265,-2.99548 14.14911,-3.87476 4.81627,-0.87894 9.63263,-1.32058 14.4491,-1.32491 22.78595,0.63346 41.45976,7.86633 56.0215,21.69864 14.56141,13.8326 22.68589,30.46488 24.37348,49.89689 0.0956,0.94587 0.15396,8.95369 0.17499,24.02349 0.0206,15.06996 0.029,37.52687 0.025,67.3708 -0.004,31.59383 0.004,54.40072 0.025,68.42072 0.0206,14.01988 0.079,21.07777 0.17499,21.17368 0.54977,2.24978 1.6997,4.09966 3.44978,5.54965 1.7497,1.44982 3.79957,2.19977 6.14962,2.24986 2.36215,-0.0459 4.43702,-0.8042 6.22461,-2.27486 1.78718,-1.47083 2.91211,-3.37904 3.37479,-5.72464 0.0956,-8e-5 0.15395,-7.04963 0.17499,-21.14868 0.0206,-14.09916 0.0289,-37.64767 0.025,-70.64558 -0.045,-24.62447 -0.0804,-43.4587 -0.10625,-56.50273 -0.0263,-13.0439 -0.0742,-22.24123 -0.14374,-27.59202 -0.07,-5.35061 -0.1929,-8.7983 -0.36872,-10.3431 -0.17624,-1.5446 -0.43664,-3.12991 -0.7812,-4.75596 -1.96676,-11.9158 -6.13316,-23.08176 -12.49922,-33.49791 -6.36646,-10.41586 -14.53261,-19.38196 -24.49847,-26.89831 -14.83256,-11.23245 -31.96481,-17.96536 -51.39679,-20.19874 -1.30837,-0.0956 -3.19159,-0.15397 -5.64965,-0.17499 -2.45829,-0.0207 -4.84147,-0.029 -7.14955,-0.025 z" /></g></g></svg></div>';
        return new eqEd.EquationDom(this, htmlRep);
    };
})();