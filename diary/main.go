package diary

import (
	"net/http"
	"encoding/json"
)

type DiaryEntry struct {
	Title    string
	Contents string
}

func init() {
	http.HandleFunc("/rest/diary/1", requestDiary)
}

func requestDiary(w http.ResponseWriter, r *http.Request) {
	testEntry := DiaryEntry{"Test Entry", "Test Contents"}
	encoded, err := json.Marshal(testEntry)
	if err != nil {
		panic(err)
	}
	w.Write(encoded)
}
