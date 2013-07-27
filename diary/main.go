
package diary

import (
    "appengine"
    "fmt"
    "net/http"
)

func init() {
    http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
    c := appengine.NewContext(r)
    c.Debugf("Requested URL: %#v", r.URL, r.URL)
    fmt.Fprintf(w, "Hello world!")
}
