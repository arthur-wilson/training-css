function changeUserPasswordLabelColorEnabled() {
    const userPassWordLabel = document.getElementById('userPassword-label');
    userPassWordLabel.classList.add('label-onfocus');
}

function changeUserPasswordLabelColorDisabled() {
    const userPassWordLabel = document.getElementById('userPassword-label');
    userPassWordLabel.classList.remove('label-onfocus');
}

function changeUserNameLabelColorEnabled() {
    const userNameLabel = document.getElementById('userName-label');
    userNameLabel.classList.add('label-onfocus');
}

function changeUserNameLabelColorDisabled() {
    const userNameLabel = document.getElementById('userName-label');
    userNameLabel.classList.remove('label-onfocus');
}