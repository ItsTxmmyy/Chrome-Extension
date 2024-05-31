document.addEventListener('DOMContentLoaded', function () {
    var openFormButton = document.getElementById('form1');

    if (openFormButton) {
        openFormButton.addEventListener('click', function () {
            chrome.tabs.create({ url: chrome.runtime.getURL('form1.html') });
        });
    } else {
        console.error('Button not found');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var openFormButton = document.getElementById('form2');

    if (openFormButton) {
        openFormButton.addEventListener('click', function () {
            chrome.tabs.create({ url: chrome.runtime.getURL('form2.html') });
        });
    } else {
        console.error('Button not found');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var openFormButton = document.getElementById('form3');

    if (openFormButton) {
        openFormButton.addEventListener('click', function () {
            chrome.tabs.create({ url: chrome.runtime.getURL('form3.html') });
        });
    } else {
        console.error('Button not found');
    }
});
SSS