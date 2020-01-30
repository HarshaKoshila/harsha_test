
export function check_email(val) {
    if (val && val.length > 0) {
        if (!val.match(/\S+@\S+\.\S+/)) {
            return false;
        }
        if (val.indexOf(' ') != -1 || val.indexOf('..') != -1) {
            return false;
        }
        return true;
    }
    else {
        return false;
    }

}


export function check_password(val) {
    if (Boolean(val) && val.length > 0 && (val.trim()).length >= 6) {
        return true;
    }
    else {
        return false;
    }
}
