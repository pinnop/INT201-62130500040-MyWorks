let favor = { name: "favorWeb", url: "https://www.youtube.com/" };
let replaceFavor = { name: "favorWeb", url: "https://www.sit.kmutt.ac.th/" };
let student = { name: "user", url: "Noppasorn" }



class CookieUtil {
    static get(name, url) {
        let cookieText = `getName: ${decodeURIComponent(name)}, Content: ${decodeURIComponent(url)}`;
    console.log(`getName: ${cookieText}`);
    }

    static set(name, url, expires) {
        let cookieText = `setName: ${encodeURIComponent(name)}, Content: ${encodeURIComponent(url)}`;

        if (expires instanceof Date) {
            cookieText += `; expires=${expires.toUTCString()}`;
            // cookieText += `; expires=${expires}`;
        }

        console.log(`${cookieText}`);
        document.cookie = cookieText;
        document.write(cookieText)
    }

    static unset(name) {
        CookieUtil.set(name, "", new Date(0));
    }
}
CookieUtil.set(favor.name, favor.url);
CookieUtil.get(favor.name, favor.url);
CookieUtil.set(student.name, student.url);
CookieUtil.get(student.name, favor.url);
CookieUtil.set(favor.name, favor.url,' 01 Jan 1970');