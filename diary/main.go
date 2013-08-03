package diary

import (
	//"appengine"
	"html/template"
	"io/ioutil"
	"net/http"
	"encoding/json"
)

type DiaryEntry struct {
	Title    string
	Contents string
}

func init() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/diary", requestAll)
}

func handler(w http.ResponseWriter, r *http.Request) {
	//c := appengine.NewContext(r)
	//c.Debugf("Requested URL: %#v", r.URL, r.URL)

	mainTemplate, err := loadTemplate("diary/assets/templates/main.html")
	if err != nil {
		panic(err)
	}

	compiledTemplate, err := template.New("main").Parse(mainTemplate)
	if err != nil {
		panic(err)
	}

	testEntry := DiaryEntry{"Test Entry", "Test Contents"}

	compiledTemplate.Execute(w, testEntry)
}

func loadTemplate(filename string) (template string, err error) {
	rawTemplate, err := ioutil.ReadFile(filename)
	template = string(rawTemplate)
	return
}

func requestAll(w http.ResponseWriter, r *http.Request) {
	testEntry := DiaryEntry{"Test Entry", "Test Contents"}
	encoded, err := json.Marshal(testEntry)
	if err != nil {
		panic(err)
	}
	w.Write(encoded)
}
