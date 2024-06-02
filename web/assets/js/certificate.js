function printCertificate() {
    const elm = document.getElementById('certificate');

    const orig = document.body.innerHTML;

    document.body.innerHTML = elm.outerHTML;
    print();
    document.body.innerHTML = orig;

}
