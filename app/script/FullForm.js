!function (t) { "use strict"; function r(t) { var r = { path: !0, query: !0, hash: !0 }; return t ? (/^[a-z]+:/.test(t) && (r.protocol = !0, r.host = !0, /[-a-z0-9]+(\.[-a-z0-9])*:\d+/i.test(t) && (r.port = !0), /\/\/(.*?)(?::(.*?))?@/.test(t) && (r.user = !0, r.pass = !0)), r) : r } function e(t, e, o) { var u, f, l, y = h ? "file://" + (process.platform.match(/^win/i) ? "/" : "") + p("fs").realpathSync(".") : document.location.href; e || (e = y), h ? u = p("url").parse(e) : (u = document.createElement("a"), u.href = e); var d = r(e); l = e.match(/\/\/(.*?)(?::(.*?))?@/) || []; for (f in a) t[f] = d[f] ? u[a[f]] || "" : ""; if (t.protocol = t.protocol.replace(/:window.jQuery/, ""), t.query = t.query.replace(/^\?/, ""), t.hash = s(t.hash.replace(/^#/, "")), t.user = s(l[1] || ""), t.pass = s(l[2] || ""), t.port = c[t.protocol] == t.port || 0 == t.port ? "" : t.port, !d.protocol && /[^\/#?]/.test(e.charAt(0)) && (t.path = e.split("?")[0].split("#")[0]), !d.protocol && o) { var g = new n(y.match(/(.*\/)/)[0]), m = g.path.split("/"), v = t.path.split("/"), q = ["protocol", "user", "pass", "host", "port"], w = q.length; for (m.pop(), f = 0; w > f; f++) t[q[f]] = g[q[f]]; for (; ".." === v[0];) m.pop(), v.shift(); t.path = ("/" !== e.charAt(0) ? m.join("/") : "") + "/" + v.join("/") } t.path = t.path.replace(/^\/{2,}/, "/"), t.paths(("/" === t.path.charAt(0) ? t.path.slice(1) : t.path).split("/")), t.query = new i(t.query) } function o(t) { return encodeURIComponent(t).replace(/'/g, "%27") } function s(t) { return t = t.replace(/\+/g, " "), t = t.replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi, function (t, r, e, o) { var s = parseInt(r, 16) - 224, i = parseInt(e, 16) - 128; if (0 === s && 32 > i) return t; var n = parseInt(o, 16) - 128, h = (s << 12) + (i << 6) + n; return h > 65535 ? t : String.fromCharCode(h) }), t = t.replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi, function (t, r, e) { var o = parseInt(r, 16) - 192; if (2 > o) return t; var s = parseInt(e, 16) - 128; return String.fromCharCode((o << 6) + s) }), t.replace(/%([0-7][0-9a-f])/gi, function (t, r) { return String.fromCharCode(parseInt(r, 16)) }) } function i(t) { for (var r, e = /([^=&]+)(=([^&]*))?/g; r = e.exec(t) ;) { var o = decodeURIComponent(r[1].replace(/\+/g, " ")), i = r[3] ? s(r[3]) : ""; void 0 !== this[o] && null !== this[o] ? (this[o] instanceof Array || (this[o] = [this[o]]), this[o].push(i)) : this[o] = i } } function n(t, r) { e(this, t, !r) } var h = "undefined" == typeof window && "undefined" != typeof global && "function" == typeof require, p = h ? t.require : null, a = { protocol: "protocol", host: "hostname", port: "port", path: "pathname", query: "search", hash: "hash" }, c = { ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 }; i.prototype.toString = function () { var t, r, e = "", s = o; for (t in this) if (!(this[t] instanceof Function || null === this[t])) if (this[t] instanceof Array) { var i = this[t].length; if (i) for (r = 0; i > r; r++) e += e ? "&" : "", e += s(t) + "=" + s(this[t][r]); else e += (e ? "&" : "") + s(t) + "=" } else e += e ? "&" : "", e += s(t) + "=" + s(this[t]); return e }, n.prototype.clearQuery = function () { for (var t in this.query) this.query[t] instanceof Function || delete this.query[t]; return this }, n.prototype.queryLength = function () { var t, r = 0; for (t in this) this[t] instanceof Function || r++; return r }, n.prototype.isEmptyQuery = function () { return 0 === this.queryLength() }, n.prototype.paths = function (t) { var r, e = "", i = 0; if (t && t.length && t + "" !== t) { for (this.isAbsolute() && (e = "/"), r = t.length; r > i; i++) t[i] = !i && t[i].match(/^\w:window.jQuery/) ? t[i] : o(t[i]); this.path = e + t.join("/") } for (t = ("/" === this.path.charAt(0) ? this.path.slice(1) : this.path).split("/"), i = 0, r = t.length; r > i; i++) t[i] = s(t[i]); return t }, n.prototype.encode = o, n.prototype.decode = s, n.prototype.isAbsolute = function () { return this.protocol || "/" === this.path.charAt(0) }, n.prototype.toString = function () { return (this.protocol && this.protocol + "://") + (this.user && o(this.user) + (this.pass && ":" + o(this.pass)) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + o(this.hash)) }, t[t.exports ? "exports" : "Url"] = n }("undefined" != typeof module && module.exports ? module : window);
var MyConst = {
    crmApiUrl: "https://api.770capital.com/Registration/Lead",
    lang: "",
    successPage: "",
    mainDivClassName: "",
    errorMessages: {
        empty: "",
        correctEmail: "",
        notNumbers: "",
        lessNumbers: "",
        moreNumbers: "",
        countryFirst: "",
    },
    labels: {
        headerOfForm: "",
        firstName: "",
        lastName: "",
        country: "",
        phone: "",
        email: "",
        buttonSubmitText: ""
    },
    helpLink: "",
    initParams: function (lang, mainDivClassName, successPage, buttonSubmitText) {
        this.lang = lang;
        this.mainDivClassName = mainDivClassName;
        this.successPage = successPage;
        this.labels.buttonSubmitText = buttonSubmitText;

        window.jQuery('#formHeaderLabel').text(window.MyConst.labels.headerOfForm);
        window.jQuery('#formFnameLabel').text(window.MyConst.labels.firstName);
        window.jQuery('#formLnameLabel').text(window.MyConst.labels.lastName);
        window.jQuery('#formCountryLabel').text(window.MyConst.labels.country);
        window.jQuery('#formPhoneLabel').text(window.MyConst.labels.phone);
        window.jQuery('#formEmailLabel').text(window.MyConst.labels.email);
        window.jQuery('#subminButton').val(window.MyConst.labels.buttonSubmitText);
        window.jQuery('#formHelpLink').text(window.MyConst.helpLink);

        //Кросбраузерные костыли
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || navigator.userAgent.toLowerCase().indexOf('trident/7.0') > -1) {
            window.jQuery('#formPhoneNumber').css("width", "72%");
        }

    }
}


if (MyConst.lang == "en") {
    MyConst.errorMessages.empty = "Required field";
    MyConst.errorMessages.correctEmail = "There are no @ or .";
    MyConst.errorMessages.notNumbers = "The number consists only of digits";
    MyConst.errorMessages.lessNumbers = "There are not enough digits";
    MyConst.errorMessages.moreNumbers = "There are too much digits";
    MyConst.errorMessages.countryFirst = "Select the country before the number";

    MyConst.labels.headerOfForm = "Registration:";
    MyConst.labels.firstName = "Name";
    MyConst.labels.lastName = "Last name";
    MyConst.labels.country = "Country";
    MyConst.labels.phone = "Phone";
    MyConst.labels.email = "Email";
    MyConst.labels.buttonSubmitText = "Submit";

    MyConst.helpLink = "Need help with registration?";

}
else {
    MyConst.errorMessages.empty = "Обязательное поле ввода";
    MyConst.errorMessages.correctEmail = "Отсутствуют символы @ или .";
    MyConst.errorMessages.notNumbers = "Номер состоит только из цифр";
    MyConst.errorMessages.lessNumbers = "В номере не хватает цифр",
    MyConst.errorMessages.moreNumbers = "В номере много цифр",
    MyConst.errorMessages.countryFirst = "Выберите страну перед номером";

    MyConst.labels.headerOfForm = "Регистрация:";
    MyConst.labels.firstName = "Имя";
    MyConst.labels.lastName = "Фамилия";
    MyConst.labels.country = "Страна";
    MyConst.labels.phone = "Телефон";
    MyConst.labels.email = "Email";
    MyConst.labels.buttonSubmitText = "Отправить";

    MyConst.helpLink = "Нужна помощь с регистрацией?";
}

var formHtml = ' <form id="leadForm" class="leadForm"> <div class="FormHeaderDiv"> <label id="formHeaderLabel" class="FormHeader"></label> </div> <div class="commonDivs fnameDiv"> <label id="formFnameLabel" class="commonLabels labelFname" for="formFirstName"></label> <input type="text" id="formFirstName" name="FirstName" class="commonInput fnameInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs lnameDiv"> <label id="formLnameLabel" class="commonLabels labelLname" for="formLastName"></label> <input type="text" id="formLastName" name="LastName" class="commonInput lnameInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div id="divCountry" class="commonDivs countryDiv"> <label id="formCountryLabel" class="commonLabels labelCountry" for="formCountry"></label> <input type="text" id="formCountry" name="Country" class="commonInput countryInput" autocomplete="off" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> <div id="livesearch"></div> </div> <div class="commonDivs phoneDiv"> <label id="formPhoneLabel" class="commonLabels labelPhone" for="formPhoneNumber"></label> <input type="text" id="formPhoneCountry" name="PhoneCountry" class="commonInput phoneCountryInput" autocomplete="off" readonly /> <input type="text" id="formPhoneNumber" name="PhoneNumber" class="commonInput phoneInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs emailDiv"> <label id="formEmailLabel" class="commonLabels labelEmail" for="formEmail"></label> <input type="email" id="formEmail" name="Email" class="commonInput emailInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs submitDiv"> <input type="button" id="subminButton" class="submitButton" /> </div> <div class="helpLinkDiv"> <a href="#" id="formHelpLink" class="helpLink"></a> </div> </form>';
window.jQuery('.leadFormContainer').eq(0).html(formHtml);
MyConst.initParams("ru", "leadFormContainer", "https://770capital.com/thank-you", "Начать зарабатывать прямо сейчас!");
(function () {
    var iso;
    window.jQuery.ajax({
        url: 'https://api.770capital.com/dictionary/countryiso?ip=' + userip,
        success: function (countryIso) {
            if (countryIso) {
                iso = countryIso;
                if (iso) {
                    window.jQuery.ajax({
                        url: '/Form770capital/backendApi/countryInfo.php',
                        data: { param_iso: iso },
                        success: function (data) {
                            var countryData = JSON.parse(data);
                            window.jQuery('#formCountry').val(function () {
                                if (window.MyConst.lang == 'en') {

                                    return countryData.CountryNameEn;
                                }
                                else {
                                    return countryData.CountryNameRu;
                                }
                            });
                            window.jQuery('#formCountry').prev().addClass("labelActive");
                            window.jQuery('#formCountry').addClass("rightInput");
                            window.jQuery('#formCountry').val(countryData.CountryNameRu);
                            window.jQuery('#formCountry').attr({ "data-countryName": countryData.CountryNameRu, "data-countryCode": countryData.CountryIso, "data-countryPhoneCode": countryData.PhoneCode });
                            // window.jQuery('#formPhoneCountry').val('+'+countryData.PhoneCode);
                            window.jQuery('#formPhoneNumber').attr({ "data-minNumbers": countryData.MinNumbersOfDigits, "data-maxNumbers": countryData.MaxNumbersOfDigits });

                        },
                        error: function () {
                            var countryData = JSON.parse('{"CountryIso":"UA","CountryNameRu":"\u0423\u043a\u0440\u0430\u0438\u043d\u0430","CountryNameEn":"Ukraine","PhoneCode":"380","MinNumbersOfDigits":"9","MaxNumbersOfDigits":"9"}');
                            window.jQuery('#formCountry').prev().addClass("labelActive");
                            window.jQuery('#formCountry').addClass("rightInput");
                            window.jQuery('#formCountry').val(countryData.CountryNameRu);
                            window.jQuery('#formCountry').attr({ "data-countryName": countryData.CountryNameRu, "data-countryCode": countryData.CountryIso, "data-countryPhoneCode": countryData.PhoneCode });
                            // window.jQuery('#formPhoneCountry').val('+'+countryData.PhoneCode);
                            window.jQuery('#formPhoneNumber').attr({ "data-minNumbers": countryData.MinNumbersOfDigits, "data-maxNumbers": countryData.MaxNumbersOfDigits });

                        }
                    });


                }
            }
        }
    });

    function sleep(miliseconds) {
        var currentTime = new Date().getTime();

        while (currentTime + miliseconds >= new Date().getTime()) {
        }
    }

})();


window.jQuery('#formCountry').keyup(checkCountry);
window.jQuery('#formCountry').focus(checkCountry);
window.jQuery(document).on('click', function (event) {
    if (event.target.id != "livesearch" && event.target.id != "formCountry" && event.target != "divCountry") {
        cleanLiveSearch();
    }
});


function checkCountry(event) {
    window.jQuery(this).next().children('.spanErrMessage').css("display", "none");
    var userCountry = window.jQuery(this).val().trim();
    if (userCountry) {
        window.jQuery.ajax({
            type: "GET",
            url: '/Form770capital/backendApi/countrySearch.php',
            data: { country: userCountry, lang: window.MyConst.lang },
            success: GetCountries
        });
    }
    else {
        cleanLiveSearch();
    }
    function GetCountries(jsonCountries) {
        cleanLiveSearch();

        var obj = JSON.parse(jsonCountries);
        if (Object.keys(obj).length > 0) {
            window.jQuery('#livesearch').addClass("liveSearch");
        }

        obj.forEach(function (item, index) {
            var countryName = (window.MyConst.lang == "en") ? item[2] : item[1];
            window.jQuery('#livesearch').append('<div class="country" data-countryCode="' + item[0] + '" data-phoneCode="' + item[3] + '" data-minNumbers="' + item[4] + '" data-maxNumbers="' + item[5] + '"data-countryName="' + countryName + '" class="liveSearch" onclick="setUpCountry(this)">' + countryName + '</div>');
        });
    }
}

function cleanLiveSearch(event) {
    window.jQuery('#livesearch').html('');
    window.jQuery('#livesearch').removeClass("liveSearch");
}

function setUpCountry(divLiveSearch) {
    window.jQuery('#formCountry').val(divLiveSearch.innerText);
    window.jQuery('#formCountry').attr({ "data-countryName": divLiveSearch.dataset.countryname, "data-countryCode": divLiveSearch.dataset.countrycode, "data-countryPhoneCode": divLiveSearch.dataset.phonecode })
    //window.jQuery('#formPhoneCountry').val('+' + divLiveSearch.dataset.phonecode);
    window.jQuery('#formPhoneNumber').attr({ "data-minNumbers": divLiveSearch.dataset.minnumbers, "data-maxNumbers": divLiveSearch.dataset.maxnumbers });
    cleanLiveSearch();
}

window.jQuery('input:text').focusout(checkIfEmptyInputs);
window.jQuery('input:text').focusin(focusIn);
window.jQuery('input:text').keyup(delErrorMes);
window.jQuery('#formEmail').focusin(focusIn);
window.jQuery('#formEmail').focusout(checkEmail);
window.jQuery('#formEmail').keyup(delErrorMes);



window.jQuery('#formPhoneNumber').keypress(checkIfNumbers);
window.jQuery('#formPhoneNumber').focusout(countNumbers);
window.jQuery('#subminButton').click(validateAllFields);
window.jQuery('#formHelpLink').click(function () {
    setTimeout(function () { Tawk_API.maximize() }, 500);

});

function delErrorMes() {
    if (window.jQuery(this).val().trim()) {
        window.jQuery(this).next().css("display", "none");
    }
}

function focusIn() {
    moveLabel(this);
    if (window.jQuery(this).attr('id') === "formPhoneNumber" || window.jQuery(this).attr('id') === "formPhoneCountry") {
        //var phoneCode = window.jQuery('#formCountry').data('countryphonecode');
        var phoneCode = document.getElementById("formCountry").getAttribute("data-countryphonecode");
        if (phoneCode) {
            window.jQuery('#formPhoneCountry').val('+' + phoneCode);
        }
    }


}

function moveLabel(myInput) {
    if (window.jQuery(myInput).attr('id') === "formPhoneNumber") {
        window.jQuery(myInput).prev().prev().addClass("labelActive");
    }
    else {
        window.jQuery(myInput).prev().addClass("labelActive");
    }

}

function moveLableBack(myInput) {
    if (window.jQuery(myInput).attr('id') === "formPhoneNumber") {
        window.jQuery(myInput).prev().prev().removeClass("labelActive");
    }
    else {
        window.jQuery(myInput).prev().removeClass("labelActive");
    }
    if (window.jQuery(myInput).attr('id') === "formPhoneNumber" || window.jQuery(myInput).attr('id') === "formPhoneCountry") {
        var phoneCode = window.jQuery('#formCountry').data('countryphonecode');
        if (phoneCode) {
            window.jQuery('#formPhoneCountry').val('');
        }
    }
}

function checkIfEmptyInputs() {
    checkIfEmpty(this);
}

function checkIfEmpty(myImput) {
    if (!window.jQuery(myImput).val().trim()) {
        //window.jQuery(myImput).next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.empty);
        var nextDiv = window.jQuery(myImput).next('.errMessageDiv')[0];
        window.jQuery(nextDiv).css("display", "inline");
        window.jQuery(nextDiv).children('.spanErrMessage').text(window.MyConst.errorMessages.empty);
        window.jQuery(myImput).removeClass("rightInput");
        window.jQuery(myImput).addClass("errorInput");
        moveLableBack(myImput);
        return false;
    }
    else {
        //window.jQuery(myImput).next().children('.spanErrMessage').css("display", "none");
        window.jQuery(myImput).next('.errMessageDiv').css("display", "none");
    }
    window.jQuery(myImput).removeClass("errorInput");
    window.jQuery(myImput).addClass("rightInput");
    return true;
}

function checkEmail(event) {
    if (window.jQuery('#formEmail').val().trim() === "") {
        // window.jQuery('#formEmail').next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.empty);
        var divErr = window.jQuery('#formEmail').next('.errMessageDiv');
        window.jQuery(divErr).css("display", "inline");
        window.jQuery(divErr).children().text(window.MyConst.errorMessages.empty);

        window.jQuery('#formEmail').addClass("errorInput");
        moveLableBack(window.jQuery('#formEmail')[0]);
        return false;
    }
    else {
        var emailContent = window.jQuery('#formEmail').val().trim();
        if (!/.+@.+\..+/i.test(emailContent)) {
            //window.jQuery('#formEmail').next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.correctEmail);
            var divErrMess = window.jQuery('#formEmail').next('.errMessageDiv');
            window.jQuery(divErrMess).css("display", "inline");
            window.jQuery(divErrMess).children().text(window.MyConst.errorMessages.correctEmail);
            window.jQuery('#formEmail').addClass("errorInput");
            return false;
        }
        else {
            // window.jQuery('#formEmail').next().children('.spanErrMessage').css("display", "none");
            window.jQuery('#formEmail').next('.errMessageDiv').css("display", "none");
            window.jQuery('#formEmail').removeClass("errorInput");
            window.jQuery('#formEmail').addClass("rightInput");
            return true;
        }
    }


}


function checkIfNumbers(event) {
    var allowedValues = [" ", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (window.jQuery.inArray(String.fromCharCode(event.charCode), allowedValues) == -1) {
        //window.jQuery(this).next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.notNumbers);
        var divErrPhone = window.jQuery(this).next('.errMessageDiv');
        window.jQuery(divErrPhone).css("display", "inline");
        window.jQuery(divErrPhone).children('.spanErrMessage').text(window.MyConst.errorMessages.notNumbers);
        event.preventDefault();
        window.jQuery('#formPhoneCountry').removeClass("rightInput");
        window.jQuery('#formPhoneNumber').removeClass("rightInput");
        window.jQuery('#formPhoneCountry').addClass("errorInput");
        window.jQuery('#formPhoneNumber').addClass("errorInput");
    }
    else {
        var numsArr = window.jQuery(this).val().split("");
        var lastChar = numsArr[numsArr.length - 1];
        if (lastChar === " " && String.fromCharCode(event.charCode) === " " || lastChar === "-" && String.fromCharCode(event.charCode) === "-" ||
            lastChar === " " && String.fromCharCode(event.charCode) === "-" || lastChar === "-" && String.fromCharCode(event.charCode) === " ") {
            event.preventDefault();
        }
        else {
            //window.jQuery(this).next().children('.spanErrMessage').css("display", "none");
            window.jQuery(this).next('.errMessageDiv').css("display", "none");

        }
    }

}

function countNumbers(event) {
    countPhoneNumbers(this);
}

function countPhoneNumbers(inputPhone) {
    var phoneNumberArr = window.jQuery(inputPhone).val().split("");
    var j = 0;
    for (var i = 0; i < phoneNumberArr.length; i++) {
        if (phoneNumberArr[i] == " " || phoneNumberArr[i] == "-") {
            delete phoneNumberArr[i];
            j++;
        }
    }
    var minQuantity = parseInt(inputPhone.dataset.minnumbers);
    var maxQuantity = parseInt(inputPhone.dataset.maxnumbers);
    if (minQuantity && maxQuantity) {
        if (phoneNumberArr.length - j < minQuantity) {
            //window.jQuery(inputPhone).next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.lessNumbers);
            var divErrPhone = window.jQuery(inputPhone).next('.errMessageDiv');
            window.jQuery(divErrPhone).css("display", "inline");
            window.jQuery(divErrPhone).children('.spanErrMessage').text(window.MyConst.errorMessages.lessNumbers);
            window.jQuery('#formPhoneCountry').removeClass("rightInput");
            window.jQuery('#formPhoneNumber').removeClass("rightInput");
            window.jQuery('#formPhoneCountry').addClass("errorInput");
            window.jQuery('#formPhoneNumber').addClass("errorInput");
            return false;
        }
        else if (phoneNumberArr.length - j > maxQuantity) {
            //window.jQuery(inputPhone).next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.moreNumbers);
            var divErrPhone = window.jQuery(inputPhone).next('.errMessageDiv');
            window.jQuery(divErrPhone).css("display", "inline");
            window.jQuery(divErrPhone).children('.spanErrMessage').text(window.MyConst.errorMessages.moreNumbers);
            window.jQuery('#formPhoneCountry').removeClass("rightInput");
            window.jQuery('#formPhoneNumber').removeClass("rightInput");
            window.jQuery('#formPhoneCountry').addClass("errorInput");
            window.jQuery('#formPhoneNumber').addClass("errorInput");
            return false;
        }
        else {
            window.jQuery(inputPhone).next().children('.spanErrMessage').css("display", "none");
            window.jQuery('#formPhoneCountry').removeClass("errorInput");
            window.jQuery('#formPhoneNumber').removeClass("errorInput");
            window.jQuery('#formPhoneCountry').addClass("rightInput");
            window.jQuery('#formPhoneNumber').addClass("rightInput");
            return true;
        }
    }
    else {
        //window.jQuery(inputPhone).next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.countryFirst);
        var divErrPhone = window.jQuery(inputPhone).next('.errMessageDiv');
        window.jQuery(divErrPhone).css("display", "inline");
        window.jQuery(divErrPhone).children('.spanErrMessage').text(window.MyConst.errorMessages.countryFirst);
        window.jQuery('#formPhoneCountry').removeClass("rightInput");
        window.jQuery('#formPhoneNumber').removeClass("rightInput");
        window.jQuery('#formPhoneCountry').addClass("errorInput");
        window.jQuery('#formPhoneNumber').addClass("errorInput");
        return false;

    }
}

function validateAllFields(event) {
    if (checkIfEmpty(window.jQuery('input:text')[0]) && checkIfEmpty(window.jQuery('input:text')[1]) && checkIfEmpty(window.jQuery('input:text')[2]) &&
         checkIfEmpty(window.jQuery('input:text')[3]) && checkIfEmpty(window.jQuery('input:text')[4]) &&
        checkEmail() && countPhoneNumbers(window.jQuery('#formPhoneNumber')[0])) {
        prepareData();
    }

}

function prepareData() {
    var email = window.jQuery('#formEmail').val();
    var fname = window.jQuery('#formFirstName').val();
    var lname = window.jQuery('#formLastName').val();
    var country = window.jQuery('#formCountry').data('countrycode');
    var phoneCountry = window.jQuery('#formPhoneCountry').val().substring(1);
    var fullNumber = window.jQuery('#formPhoneNumber').val();
    var phoneOperator = fullNumber.substring(0, 2);
    var phoneNumber = fullNumber.substring(2);
    var refferer = location.protocol + '//' + location.host + location.pathname + location.search;
    window.jQuery.ajax({
        url: window.MyConst.crmApiUrl,
        data: { Email: email, PhoneCountry: phoneCountry, PhoneOperator: phoneOperator, PhoneNumber: phoneNumber, FirstName: fname, LastName: lname, Country: country, Referrer: refferer },
        success: function (leadInfo) {
            if (leadInfo.leadGuid || leadInfo.registrationGuid) {
                window.location.replace(window.MyConst.successPage);
            }
            else {
                sendEmergencyMail(email, phoneCountry, phoneOperator, phoneNumber, fname, lname, country, refferer);
            }
        },
        error: function () {
            sendEmergencyMail(email, phoneCountry, phoneOperator, phoneNumber, fname, lname, country, refferer);
        }
    });


}

function sendEmergencyMail(email, phoneCountry, phoneOperator, phoneNumber, fname, lname, country, refferer) {
    window.jQuery.ajax({
        url: 'backendApi/SendEmergencyEmail.php',
        data: { Email: email, PhoneCountry: phoneCountry, PhoneOperator: phoneOperator, PhoneNumber: phoneNumber, FirstName: fname, LastName: lname, Country: country, Referrer: refferer },
        success: function () {

            window.location.replace(window.MyConst.successPage);
        },
        error: function () {

        }
    });
}
