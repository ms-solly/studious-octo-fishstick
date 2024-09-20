package main

import (
    "encoding/json"
    "net/http"
    "log"
)

func fetchPinterestData(w http.ResponseWriter, r *http.Request) {
    query := r.URL.Query().Get("query")
    apiKey := "YOUR_PINTEREST_API_KEY" // Replace with your Pinterest API key
    apiUrl := "https://api.pinterest.com/v3/search/pins?query=" + query + "&access_token=" + apiKey

    response, err := http.Get(apiUrl)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer response.Body.Close()

    if response.StatusCode != http.StatusOK {
        http.Error(w, "Error fetching data from Pinterest", response.StatusCode)
        return
    }

    var result map[string]interface{}
    if err := json.NewDecoder(response.Body).Decode(&result); err != nil {
        http.Error(w, "Error decoding JSON", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(result)
}

func main() {
    fs := http.FileServer(http.Dir("./static"))
    http.Handle("/", fs)

    http.HandleFunc("/api/wallpapers", fetchPinterestData)

    log.Println("Server started on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
