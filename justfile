admin:
  npx netlify-cms-proxy-server &
  python3 -m http.server --directory ./admin &

admin-stop:
  pkill -f "netlify-cms-proxy-server"
  pkill -f "http.server"

fresh:
  rm -rf ./public/*
  hugo