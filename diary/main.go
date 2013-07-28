
package diary

import (
    "io/ioutil"
    "http/template"
    "appengine"
    "net/http"
)

type DiaryEntry struct {
    title string
    contents string
}

func init() {
    http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
    c := appengine.NewContext(r)
    c.Debugf("Requested URL: %#v", r.URL, r.URL)

    // TOOD errs
    mainTemplate, err := ioutil.ReadFile("diary/assets/templates/main.html")

    // TODO errs
    mainTemplate, err := template.New("main").Parse(mainTemplate)

    testEntry := DiaryEntry{"Test Entry", "Test Contents"}

    mainTemplate.execute(w, testEntry)
}
