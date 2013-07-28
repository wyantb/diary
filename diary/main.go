
package diary

import (
    "http/template"
    "appengine"
    "fmt"
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
    fmt.Fprintf(w, "Hello world!")
}
