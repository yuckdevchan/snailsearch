var engines = {
  "!g": ['Google', '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="262" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>'],
  "!w": ['Wikipedia', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m14.97 18.95l-2.56-6.03c-1.02 1.99-2.14 4.08-3.1 6.03c-.01.01-.47 0-.47 0C7.37 15.5 5.85 12.1 4.37 8.68C4.03 7.84 2.83 6.5 2 6.5v-.45h5.06v.45c-.6 0-1.62.4-1.36 1.05c.72 1.54 3.24 7.51 3.93 9.03c.47-.94 1.8-3.42 2.37-4.47c-.45-.88-1.87-4.18-2.29-5c-.32-.54-1.13-.61-1.75-.61c0-.15.01-.25 0-.44l4.46.01v.4c-.61.03-1.18.24-.92.82c.6 1.24.95 2.13 1.5 3.28c.17-.34 1.07-2.19 1.5-3.16c.26-.65-.13-.91-1.21-.91c.01-.12.01-.33.01-.43c1.39-.01 3.48-.01 3.85-.02v.42c-.71.03-1.44.41-1.82.99L13.5 11.3c.18.51 1.96 4.46 2.15 4.9l3.85-8.83c-.3-.72-1.16-.87-1.5-.87v-.45l4 .03v.42c-.88 0-1.43.5-1.75 1.25c-.8 1.79-3.25 7.49-4.85 11.2z"/></svg>'],
  "!yt": ['YouTube', '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="180" viewBox="0 0 256 180"><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>'],
  "!ya": ['Yandex', '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#d61e3b" d="M21.88 2h-4c-4 0-8.07 3-8.07 9.62a8.33 8.33 0 0 0 4.14 7.66L9 28.13a1.25 1.25 0 0 0 0 1.27a1.21 1.21 0 0 0 1 .6h2.49a1.24 1.24 0 0 0 1.2-.75l4.59-9h.34v8.62a1.14 1.14 0 0 0 1.2 1.13H22a1.12 1.12 0 0 0 1.16-1.06V3.22A1.19 1.19 0 0 0 22 2ZM18.7 16.28h-.59c-2.3 0-3.66-1.87-3.66-5c0-3.9 1.73-5.29 3.34-5.29h.94Z"/></svg>'],
  "!ddg": ['DuckDuckGo', '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="255" viewBox="0 0 256 255"><defs><linearGradient id="logosDuckduckgo0" x1="71.005%" x2="0%" y1="100%" y2="100%"><stop offset="0%" stop-color="#394a9f"/><stop offset="100%" stop-color="#6176b9"/></linearGradient></defs><path fill="#de5833" d="M128.145 18.841c60.002 0 108.643 48.641 108.643 108.643c0 60.001-48.641 108.642-108.643 108.642c-60.001 0-108.642-48.641-108.642-108.642c0-60.002 48.641-108.643 108.642-108.643"/><path fill="#de5833" d="M128.143 254.922c70.383 0 127.44-57.057 127.44-127.44S198.526.042 128.143.042S.703 57.099.703 127.482s57.057 127.44 127.44 127.44m0-10.62c-64.518 0-116.82-52.302-116.82-116.82s52.302-116.82 116.82-116.82s116.82 52.302 116.82 116.82s-52.302 116.82-116.82 116.82"/><path fill="#d5d7d8" d="M75.219 54.13c-.021-1.827 1.306-2.85 3.069-3.567c-.807.132-1.58.334-2.276.646c-1.838.833-3.212 3.987-3.199 5.48c8.923-.902 22.118-.278 31.767 2.602c.712-.1 1.424-.2 2.147-.283c-9.624-4.273-21.066-5.923-31.508-4.878m1.829-10.98c.201-.036.405-.061.607-.095c-1.925.239-2.94.927-4.385 1.164c1.569.139 7.514 2.914 11.25 4.44c.524-.199.996-.42 1.381-.681c-1.937-.286-6.75-4.636-8.853-4.828m9.278 21.606c-.535.206-1.043.421-1.483.652c-14.545 7.663-20.97 25.562-17.141 47.01c3.495 19.518 17.82 86.205 24.379 117.571c1.915.673 3.853 1.298 5.815 1.865c-5.841-28.24-21.784-102.24-25.504-123.023c-3.771-21.143-.102-36.314 13.934-44.075"/><path fill="#fff" d="M145.184 218.618c-.24.16-.526.31-.831.456c-.226.876-.571 1.54-1.074 1.874c-3.004 1.993-11.489 2.997-15.969 1.993c-.771-.171-1.355-.454-1.811-.843c-7.649 4.247-18.649 9.901-20.883 8.627c-3.49-2.001-3.996-28.451-3.49-34.942c.369-4.9 17.581 3.037 25.954 7.2c1.851-1.729 6.386-2.886 10.4-3.279c-6.065-14.761-10.538-31.645-7.796-43.618c-3.79-2.641-8.813-8.766-7.767-15.159c.806-4.866 13.38-14.072 22.283-14.628c8.923-.563 11.704-.436 19.138-2.216l1.209-.29c4.576-16.087-6.399-44.074-18.641-56.321c-3.991-3.991-10.127-6.503-17.041-7.829c-2.659-3.649-6.948-7.138-13.02-10.369c-11.275-5.986-25.209-8.423-38.19-6.219c-.202.034-.406.059-.607.095c2.103.192 6.916 4.542 8.853 4.828c-.385.261-.857.482-1.381.681c-1.818.692-4.289 1.112-6.232 1.904c-1.763.717-3.09 1.74-3.069 3.567c10.442-1.045 21.884.605 31.508 4.878c-.723.083-1.435.183-2.147.283c-6.825.96-13.098 2.728-17.63 5.119c-.213.111-.415.231-.624.346c-14.036 7.761-17.705 22.932-13.934 44.075C76.112 129.614 92.159 204.76 98 233c9.603 2.779 18.582 5 29.08 5c8.912 0 19.631-1.975 27.92-4c-2.911-5.613-6.656-11.82-8.964-16.271c-.308.367-.551.688-.852.889m5.873-106.561c-3.804 0-6.907-3.094-6.907-6.92c0-3.808 3.103-6.903 6.907-6.903c3.825 0 6.916 3.095 6.916 6.903a6.91 6.91 0 0 1-6.916 6.92m4.161-26.008s-4.357-2.489-7.738-2.447c-6.948.091-8.84 3.161-8.84 3.161s1.166-7.318 10.051-5.85c4.817.801 6.527 5.136 6.527 5.136m-73.255 8.997s-3.129-6.973 5.21-10.39c8.348-3.418 12.413 1.945 12.413 1.945s-6.062-2.742-11.956.962c-5.884 3.7-5.667 7.483-5.667 7.483m7.29 14.862a8.04 8.04 0 0 1 8.047-8.044a8.04 8.04 0 0 1 8.04 8.044c0 4.447-3.6 8.041-8.04 8.041a8.034 8.034 0 0 1-8.047-8.041"/><path fill="#2d4f8e" d="M105.34 109.908a8.04 8.04 0 0 0-8.04-8.044a8.04 8.04 0 0 0-8.047 8.044a8.034 8.034 0 0 0 8.047 8.041c4.44 0 8.04-3.594 8.04-8.041m-4.478-.591a2.09 2.09 0 0 1-2.081-2.09a2.085 2.085 0 1 1 4.171 0a2.09 2.09 0 0 1-2.09 2.09"/><path fill="#fff" d="M100.862 105.139a2.085 2.085 0 0 0-2.081 2.088c0 1.154.939 2.093 2.081 2.09a2.09 2.09 0 0 0 2.09-2.09a2.087 2.087 0 0 0-2.09-2.088"/><path fill="#2d4f8e" d="M151.057 98.234c-3.804 0-6.907 3.095-6.907 6.903c0 3.826 3.103 6.92 6.907 6.92a6.91 6.91 0 0 0 6.916-6.92c0-3.808-3.091-6.903-6.916-6.903m3.067 6.394c-.975 0-1.78-.793-1.78-1.789c0-.983.805-1.79 1.78-1.79c1.017 0 1.797.807 1.797 1.79c0 .996-.78 1.789-1.797 1.789"/><path fill="#fff" d="M154.124 101.049c-.975 0-1.78.807-1.78 1.79c0 .996.805 1.789 1.78 1.789a1.773 1.773 0 0 0 1.797-1.789c0-.983-.78-1.79-1.797-1.79"/><path fill="url(#logosDuckduckgo0)" d="M33.586 44.601s-4.065-5.363-12.413-1.945c-8.339 3.417-5.21 10.39-5.21 10.39s-.217-3.783 5.667-7.483c5.894-3.704 11.956-.962 11.956-.962m49.105-5.688c-8.885-1.468-10.051 5.85-10.051 5.85s1.892-3.07 8.84-3.161c3.381-.042 7.738 2.447 7.738 2.447s-1.71-4.335-6.527-5.136" transform="translate(66 42)"/><path fill="#fdd209" d="M144.2 126.299c-8.903.556-21.477 9.762-22.283 14.628c-1.046 6.393 3.977 12.518 7.767 15.159l.031.023c3.789 2.636 29.018 11.147 41.535 10.911c12.531-.244 33.111-7.918 30.851-14.067c-2.25-6.151-22.689 5.427-44.007 3.451c-15.788-1.467-18.575-8.54-15.079-13.706c4.397-6.493 12.406 1.232 25.616-2.721c13.23-3.942 31.732-10.998 38.597-14.84c15.873-8.849-6.642-12.519-11.96-10.064c-5.041 2.329-22.587 6.757-30.721 8.72l-1.209.29c-7.434 1.78-10.215 1.653-19.138 2.216"/><path fill="#65bc46" d="M124.316 206.97c0-.921.741-1.736 1.917-2.431c.033-.559.337-1.079.847-1.556c-8.373-4.163-25.585-12.1-25.954-7.2c-.506 6.491 0 32.941 3.49 34.942c2.234 1.274 13.234-4.38 20.883-8.627c-2.207-1.881-1.183-6.447-1.183-15.128m21.609 10.716l.111.043c6.854 2.645 20.498 7.624 23.461 6.537c3.995-1.527 2.995-33.453-1.489-34.47c-3.592-.797-17.343 8.892-22.753 12.839c.957 4.041 2.115 12.045.67 15.051"/><path fill="#43a244" d="M129.214 220.611c-4.495-.996-2.993-5.493-2.993-15.971c0-.034.01-.067.012-.101c-1.176.695-1.917 1.51-1.917 2.431c0 8.681-1.024 13.247 1.183 15.128c.456.389 1.04.672 1.811.843c4.48 1.004 12.965 0 15.969-1.993c.503-.334.848-.998 1.074-1.874c-3.516 1.684-11.024 2.473-15.139 1.537"/><path fill="#65bc46" d="M127.08 202.983c-.51.477-.814.997-.847 1.556c-.002.034-.012.067-.012.101c0 10.478-1.502 14.975 2.993 15.971c4.115.936 11.623.147 15.139-1.537c.305-.146.591-.296.831-.456c.301-.201.544-.522.741-.932c1.445-3.006.287-11.01-.67-15.051c-.211-.889-.411-1.589-.572-1.999c-.413-1.022-3.594-1.285-7.203-.932c-4.014.393-8.549 1.55-10.4 3.279"/></svg>'],
  "!b": ['Bing!', '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="388" viewBox="0 0 256 388"><defs><radialGradient id="logosBing0" cx="93.717%" cy="77.818%" r="143.121%" fx="93.717%" fy="77.818%" gradientTransform="scale(-1 -.71954)rotate(49.091 2.036 -2.204)"><stop offset="0%" stop-color="#00cacc"/><stop offset="100%" stop-color="#048fce"/></radialGradient><radialGradient id="logosBing1" cx="13.893%" cy="71.448%" r="150.086%" fx="13.893%" fy="71.448%" gradientTransform="matrix(.55155 -.39387 .23634 .91917 -.107 .112)"><stop offset="0%" stop-color="#00bbec"/><stop offset="100%" stop-color="#2756a9"/></radialGradient><linearGradient id="logosBing2" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#00bbec"/><stop offset="100%" stop-color="#2756a9"/></linearGradient></defs><path fill="url(#logosBing0)" d="M129.424 122.047c-7.133.829-12.573 6.622-13.079 13.928c-.218 3.147-.15 3.36 6.986 21.722c16.233 41.774 20.166 51.828 20.827 53.243c1.603 3.427 3.856 6.65 6.672 9.544c2.16 2.22 3.585 3.414 5.994 5.024c4.236 2.829 6.337 3.61 22.818 8.49c16.053 4.754 24.824 7.913 32.381 11.664c9.791 4.86 16.623 10.387 20.944 16.946c3.1 4.706 5.846 13.145 7.04 21.64c.468 3.321.47 10.661.006 13.663c-1.008 6.516-3.021 11.976-6.101 16.545c-1.638 2.43-1.068 2.023 1.313-.939c6.74-8.379 13.605-22.7 17.108-35.687c4.24-15.718 4.817-32.596 1.66-48.57c-6.147-31.108-25.786-57.955-53.444-73.06c-1.738-.95-8.357-4.42-17.331-9.085a1633 1633 0 0 1-4.127-2.154c-.907-.477-2.764-1.447-4.126-2.154c-1.362-.708-5.282-2.75-8.711-4.539l-8.528-4.446a6021 6021 0 0 1-8.344-4.357c-8.893-4.655-12.657-6.537-13.73-6.863c-1.125-.343-3.984-.782-4.701-.723c-.152.012-.838.088-1.527.168"/><path fill="url(#logosBing1)" d="M148.81 277.994c-.493.292-1.184.714-1.537.938c-.354.225-1.137.712-1.743 1.083a8315 8315 0 0 0-13.204 8.137a2848 2848 0 0 0-8.07 4.997a388 388 0 0 1-3.576 2.198c-.454.271-2.393 1.465-4.31 2.654a2652 2652 0 0 1-7.427 4.586a3958 3958 0 0 0-8.62 5.316a3011 3011 0 0 1-7.518 4.637c-1.564.959-3.008 1.885-3.21 2.058c-.3.257-14.205 8.87-21.182 13.121c-5.3 3.228-11.43 5.387-17.705 6.235c-2.921.395-8.45.396-11.363.003c-7.9-1.067-15.176-4.013-21.409-8.666c-2.444-1.826-7.047-6.425-8.806-8.8c-4.147-5.598-6.829-11.602-8.218-18.396c-.32-1.564-.622-2.884-.672-2.935c-.13-.13.105 2.231.528 5.319c.44 3.211 1.377 7.856 2.387 11.829c7.814 30.743 30.05 55.749 60.15 67.646c8.668 3.424 17.415 5.582 26.932 6.64c3.576.4 13.699.56 17.43.276c17.117-1.296 32.02-6.334 47.308-15.996c1.362-.86 3.92-2.474 5.685-3.585a877 877 0 0 0 4.952-3.14c.958-.615 2.114-1.341 2.567-1.614a91 91 0 0 0 2.018-1.268c.656-.424 3.461-2.2 6.235-3.944l11.092-7.006l3.809-2.406l.137-.086l.42-.265l.199-.126l2.804-1.771l9.69-6.121c12.348-7.759 16.03-10.483 21.766-16.102c2.392-2.342 5.997-6.34 6.176-6.848c.037-.104.678-1.092 1.424-2.197c3.036-4.492 5.06-9.995 6.064-16.484c.465-3.002.462-10.342-.005-13.663c-.903-6.42-2.955-13.702-5.167-18.339c-3.627-7.603-11.353-14.512-22.453-20.076c-3.065-1.537-6.23-2.943-6.583-2.924c-.168.009-10.497 6.322-22.954 14.03c-12.457 7.71-23.268 14.4-24.025 14.87s-2.056 1.263-2.888 1.764z"/><path fill="url(#logosBing2)" d="m.053 241.013l.054 53.689l.695 3.118c2.172 9.747 5.937 16.775 12.482 23.302c3.078 3.07 5.432 4.922 8.768 6.896c7.06 4.177 14.657 6.238 22.978 6.235c8.716-.005 16.256-2.179 24.025-6.928c1.311-.801 6.449-3.964 11.416-7.029l9.032-5.572v-127.4l-.002-58.273c-.002-37.177-.07-59.256-.188-60.988c-.74-10.885-5.293-20.892-12.948-28.461c-2.349-2.323-4.356-3.875-10.336-7.99a25160 25160 0 0 1-12.104-8.336L28.617 5.835C22.838 1.85 22.386 1.574 20.639.949C18.367.136 15.959-.163 13.67.084C6.998.804 1.657 5.622.269 12.171C.053 13.191.013 26.751.01 100.35l-.003 86.975H0z"/></svg>'],
  "!r": ['Reddit', '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><circle cx="128" cy="128" r="128" fill="#ff4500"/><path fill="#fff" d="M213.15 129.22c0-10.376-8.391-18.617-18.617-18.617a18.74 18.74 0 0 0-12.97 5.189c-12.818-9.157-30.368-15.107-49.9-15.87l8.544-39.981l27.773 5.95c.307 7.02 6.104 12.667 13.278 12.667c7.324 0 13.275-5.95 13.275-13.278c0-7.324-5.95-13.275-13.275-13.275c-5.188 0-9.768 3.052-11.904 7.478l-30.976-6.562c-.916-.154-1.832 0-2.443.458c-.763.458-1.22 1.22-1.371 2.136l-9.464 44.558c-19.837.612-37.692 6.562-50.662 15.872a18.74 18.74 0 0 0-12.971-5.188c-10.377 0-18.617 8.391-18.617 18.617c0 7.629 4.577 14.037 10.988 16.939a33.6 33.6 0 0 0-.458 5.646c0 28.686 33.42 52.036 74.621 52.036c41.202 0 74.622-23.196 74.622-52.036a35 35 0 0 0-.458-5.646c6.408-2.902 10.985-9.464 10.985-17.093M85.272 142.495c0-7.324 5.95-13.275 13.278-13.275c7.324 0 13.275 5.95 13.275 13.275s-5.95 13.278-13.275 13.278c-7.327.15-13.278-5.953-13.278-13.278m74.317 35.251c-9.156 9.157-26.553 9.768-31.588 9.768c-5.188 0-22.584-.765-31.59-9.768c-1.371-1.373-1.371-3.51 0-4.883c1.374-1.371 3.51-1.371 4.884 0c5.8 5.8 18.008 7.782 26.706 7.782s21.058-1.983 26.704-7.782c1.374-1.371 3.51-1.371 4.884 0c1.22 1.373 1.22 3.51 0 4.883m-2.443-21.822c-7.325 0-13.275-5.95-13.275-13.275s5.95-13.275 13.275-13.275c7.327 0 13.277 5.95 13.277 13.275c0 7.17-5.95 13.275-13.277 13.275"/></svg>'],
  "!spotify": ['Spotify', '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="#1ed760" d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.98 7.98 0 0 1-9.552-6.007a7.97 7.97 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975m15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187z"/></svg>'],
  "!tmdb": ['TheMovieDB', '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 185.04 133.4"><defs><style>.cls-1{fill:url(#linear-gradient);}</style><linearGradient id="linear-gradient" y1="66.7" x2="185.04" y2="66.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#90cea1"/><stop offset="0.56" stop-color="#3cbec9"/><stop offset="1" stop-color="#00b3e5"/></linearGradient></defs><title>Asset 4</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M51.06,66.7h0A17.67,17.67,0,0,1,68.73,49h-.1A17.67,17.67,0,0,1,86.3,66.7h0A17.67,17.67,0,0,1,68.63,84.37h.1A17.67,17.67,0,0,1,51.06,66.7Zm82.67-31.33h32.9A17.67,17.67,0,0,0,184.3,17.7h0A17.67,17.67,0,0,0,166.63,0h-32.9A17.67,17.67,0,0,0,116.06,17.7h0A17.67,17.67,0,0,0,133.73,35.37Zm-113,98h63.9A17.67,17.67,0,0,0,102.3,115.7h0A17.67,17.67,0,0,0,84.63,98H20.73A17.67,17.67,0,0,0,3.06,115.7h0A17.67,17.67,0,0,0,20.73,133.37Zm83.92-49h6.25L125.5,49h-8.35l-8.9,23.2h-.1L99.4,49H90.5Zm32.45,0h7.8V49h-7.8Zm22.2,0h24.95V77.2H167.1V70h15.35V62.8H167.1V56.2h16.25V49h-24ZM10.1,35.4h7.8V6.9H28V0H0V6.9H10.1ZM39,35.4h7.8V20.1H61.9V35.4h7.8V0H61.9V13.2H46.75V0H39Zm41.25,0h25V28.2H88V21h15.35V13.8H88V7.2h16.25V0h-24Zm-79,49H9V57.25h.1l9,27.15H24l9.3-27.15h.1V84.4h7.8V49H29.45l-8.2,23.1h-.1L13,49H1.2Zm112.09,49H126a24.59,24.59,0,0,0,7.56-1.15,19.52,19.52,0,0,0,6.35-3.37,16.37,16.37,0,0,0,4.37-5.5A16.91,16.91,0,0,0,146,115.8a18.5,18.5,0,0,0-1.68-8.25,15.1,15.1,0,0,0-4.52-5.53A18.55,18.55,0,0,0,133.07,99,33.54,33.54,0,0,0,125,98H113.29Zm7.81-28.2h4.6a17.43,17.43,0,0,1,4.67.62,11.68,11.68,0,0,1,3.88,1.88,9,9,0,0,1,2.62,3.18,9.87,9.87,0,0,1,1,4.52,11.92,11.92,0,0,1-1,5.08,8.69,8.69,0,0,1-2.67,3.34,10.87,10.87,0,0,1-4,1.83,21.57,21.57,0,0,1-5,.55H121.1Zm36.14,28.2h14.5a23.11,23.11,0,0,0,4.73-.5,13.38,13.38,0,0,0,4.27-1.65,9.42,9.42,0,0,0,3.1-3,8.52,8.52,0,0,0,1.2-4.68,9.16,9.16,0,0,0-.55-3.2,7.79,7.79,0,0,0-1.57-2.62,8.38,8.38,0,0,0-2.45-1.85,10,10,0,0,0-3.18-1v-.1a9.28,9.28,0,0,0,4.43-2.82,7.42,7.42,0,0,0,1.67-5,8.34,8.34,0,0,0-1.15-4.65,7.88,7.88,0,0,0-3-2.73,12.9,12.9,0,0,0-4.17-1.3,34.42,34.42,0,0,0-4.63-.32h-13.2Zm7.8-28.8h5.3a10.79,10.79,0,0,1,1.85.17,5.77,5.77,0,0,1,1.7.58,3.33,3.33,0,0,1,1.23,1.13,3.22,3.22,0,0,1,.47,1.82,3.63,3.63,0,0,1-.42,1.8,3.34,3.34,0,0,1-1.13,1.2,4.78,4.78,0,0,1-1.57.65,8.16,8.16,0,0,1-1.78.2H165Zm0,14.15h5.9a15.12,15.12,0,0,1,2.05.15,7.83,7.83,0,0,1,2,.55,4,4,0,0,1,1.58,1.17,3.13,3.13,0,0,1,.62,2,3.71,3.71,0,0,1-.47,1.95,4,4,0,0,1-1.23,1.3,4.78,4.78,0,0,1-1.67.7,8.91,8.91,0,0,1-1.83.2h-7Z"/></g></g><auto-scroll xmlns="http://www.w3.org/1999/xhtml"></auto-scroll></svg>'],
  "!a": ['Amazon', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.997 18.23c0 .727-.405 2.127-1.315 2.896c-.182.14-.364.061-.284-.143c.265-.648.871-2.147.587-2.492c-.201-.262-1.031-.242-1.739-.182c-.323.041-.607.06-.827.105c-.204.016-.245-.163-.041-.303a3.1 3.1 0 0 1 .87-.428c1.15-.344 2.479-.137 2.67.083c.036.042.079.16.079.463m-1.922 1.294a7 7 0 0 1-.829.55c-2.122 1.275-4.871 1.943-7.258 1.943c-3.843 0-7.28-1.417-9.888-3.788c-.224-.182-.039-.446.223-.303c2.81 1.64 6.288 2.632 9.888 2.632c2.266 0 4.708-.424 7.035-1.336c.163-.061.345-.144.504-.202c.367-.165.69.242.325.504m-6.17-11.03c0-1.041.042-1.654-.303-2.18c-.306-.433-.833-.693-1.569-.652c-.798.044-1.655.567-1.873 1.526c-.043.22-.171.436-.437.483l-2.435-.31c-.174-.04-.439-.173-.352-.521C7.459 4.088 9.81 3.129 12.034 3h.522c1.22 0 2.788.349 3.791 1.264c1.217 1.136 1.087 2.662 1.087 4.32v3.927c0 1.178.478 1.7.958 2.314c.13.219.175.477-.044.655a78 78 0 0 1-1.917 1.654c-.175.133-.489.147-.61.045c-.77-.645-.958-1.003-1.435-1.658c-.83.871-1.527 1.352-2.356 1.613a7 7 0 0 1-1.784.216c-2.09 0-3.745-1.303-3.745-3.88c0-2.049 1.09-3.442 2.7-4.101c1.61-.66 3.95-.87 4.704-.874m-.477 5.192c.52-.872.477-1.586.477-3.185c-.652 0-1.306.045-1.871.178c-1.045.303-1.875.96-1.875 2.355c0 1.09.568 1.832 1.526 1.832q.198 0 .348-.045c.67-.186 1.088-.522 1.395-1.135"/></svg>'],
  "!gh": ['GitHub', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>'],
  "!x": ['X / Twitter', '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none"><g clip-path="url(#primeTwitter0)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg>'],
};

var tlds = [];
fetch("/static/tlds.json")
  .then(response => response.json())
  .then(data => tlds = data);

fetch("/static/bangs.json")
.then(response => response.json())
.then(data => {
  bangs = data;
});

blankedOut = false;

const blankOutCSS = `
  .search-box {
    width: 3em;
    justify-content: center;
    opacity: 0;
  }
  #searchEngineIcon {
    padding-left: 0;
    padding-right: 0;
    pointer-events: none;
  }
  #searchEngineIcon svg {
    width: 1.5em;
    height: 1.5em;
    animation: spin 1s linear infinite;
  }
  .search-buttons {
    transform: translateY(25em);
    opacity: 0;
  }
`;

function blankOutPage() {
  let style = document.getElementById('blankOutStyle');
  if (!style) {
    style = document.createElement('style');
    style.id = 'blankOutStyle';
    document.head.appendChild(style);
  }
  
  style.textContent = blankOutCSS;
  blankedOut = true;
}

function unblankOutPage() {
  const style = document.getElementById('blankOutStyle');
  if (style) {
    style.remove();
  }
  blankedOut = false;
}

const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

function updateBangCharacters(bang) {
  var bangCharacters = document.querySelectorAll(".bangCharacter");
  bangCharacters.forEach(element => {
    element.innerHTML = bang;
  });
}

var bangCharacter = getCookieValue("b")
if (bangCharacter === "") {
  var bangCharacter = "!";
} else {
  updateBangCharacters(bangCharacter);
}

function changeBangCharacter(bang) {
  document.cookie = "b=" + bang;
  bangCharacter = bang;
  updateBangCharacters(bangCharacter);
}

function search(query) {
  lowerQuery = query.toLowerCase();
  redirected = false;
  var input = document.getElementById("searchBox");
  if (query.startsWith("s/setBang ")) {
    var newBang = lowerQuery.split(" ")[1];
    changeBangCharacter(newBang);
    input.value = "";
    resetSuggestions();
    window.location.reload();
    return;
  } else if (query.startsWith("s/setTheme ")) {
    var newTheme = lowerQuery.split(" ")[1];
    if (newTheme == "dark" || newTheme == "light") {
      document.cookie = "theme=" + newTheme;
      if (newTheme == "dark" && document.ujrifoweajdk-0[p])
      document.body.classList.toggle('dark-mode');
      return;
    } else {
      input.value = "Invalid theme! Choose either 'light' or 'dark'.";
      return;
    }
  }
  if (lowerQuery.startsWith("https://") || lowerQuery.startsWith("http://")) {
    window.location.href = lowerQuery; redirected = true;
  } else if (query.includes(".") && query.split(".")[0].length > 0 && query.split(".")[1].length > 0) {
    queryTLD = query.toUpperCase().split(".").slice(-1)[0];
    if (tlds.includes(queryTLD)) {
      window.location.href = "https://" + query; redirected = true;
    }
  } else if (query.startsWith("localhost")) {
    if (lowerQuery === "localhost") {
      window.location.href = "http://localhost"; redirected = true;
    } else if (lowerQuery.startsWith("localhost:")) {
      if (!isNaN(lowerQuery.split(":")[1])) {
        window.location.href = "http://" + query; redirected = true;
      }
    }
  }
  for (let i = 0; i < bangs.length; i++) {
    if (lowerQuery.trim() === bangCharacter + bangs[i]["t"]) {
      window.location.href = "https://" + bangs[i]["d"]; redirected = true;
    } else if (lowerQuery.endsWith(" " + bangCharacter + bangs[i]["t"])) {
      window.location.href = bangs[i]["u"].replace("{{{s}}}", query.split(bangCharacter)[0].trim()); redirected = true;
    }
  }
  if (!redirected) {
    window.location.href = "https://google.com/search?q=" + query; redirected = true;
  }
  blankOutPage();
}

var input = document.getElementById("searchBox");
input.value = "";

window.addEventListener("pageshow", function(event) {
  if (blankedOut) {
    unblankOutPage();
  }
  var aiDropdown = document.getElementById("aiDropdown");
  var engineDropdown = document.getElementById("engineDropdown");
  if (!aiDropdown.classList.contains("hidden")) {
    aiDropdown.classList.add("hidden");
  }
  if (!engineDropdown.classList.contains("hidden")) {
    engineDropdown.classList.add("hidden");
  }
  input.value = "";
  input.focus();
  var searchEngineIcon = document.getElementById("searchEngineIcon");
  searchEngineIcon.innerHTML = engines["!g"][1];
  resetSuggestions();
});

var sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4V2m0 18v2M6.414 6.414L5 5m12.728 12.728l1.414 1.414M4 12H2m18 0h2m-4.271-5.586L19.143 5M6.415 17.728L5 19.142M12 17a5 5 0 1 1 0-10a5 5 0 0 1 0 10"/></svg>';
var moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6a9 9 0 0 0 9 9c.91 0 1.787-.134 2.614-.385A9 9 0 0 1 12 21A9 9 0 0 1 9.386 3.386A9 9 0 0 0 9 6"/></svg>'
var themeToggleButton = document.getElementById("themeToggleButton");

if (document.cookie.includes("theme=dark") || document.cookie.includes("theme=light")) {
  if (document.cookie.includes("theme=dark")) {
    document.body.classList.add('dark-mode');
    themeToggleButton.innerHTML = sunIcon;
  } else {
    themeToggleButton.innerHTML = moonIcon;
  }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
  themeToggleButton.innerHTML = sunIcon;
} else {
  themeToggleButton.innerHTML = moonIcon;
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (document.cookie.includes("theme=dark")) {
    return;
  } else if (document.cookie.includes("theme=light")) {
    return;
  }
  if (e.matches) {
    document.body.classList.add('dark-mode');
    themeToggleButton.innerHTML = sunIcon;
  } else {
    document.body.classList.remove('dark-mode');
    themeToggleButton.innerHTML = moonIcon;
  }
});

var themeTogglebutton = document.getElementById("themeToggleButton");
themeTogglebutton.addEventListener("click", function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggleButton.innerHTML = sunIcon;
    document.cookie = "theme=dark";
  } else {
    themeToggleButton.innerHTML = moonIcon;
    document.cookie = "theme=light";
  }
});

function searchButtonPressed() {
  var input = document.getElementById("searchBox");
  let query = input.value;
  if (query.length === 0) {
    return;
  }
  search(query);
}

function promptButtonPressed() {
  var input = document.getElementById("searchBox");
  let query = input.value;
  if (query.length === 0) {
    return;
  }
  lowerQuery = query.toLowerCase();
  promptURL = "https://www.perplexity.ai/search?q={{{s}}}"
  window.location.href = promptURL.replace("{{{s}}}", encodeURIComponent(query));
}

function resetSuggestions() {
  var suggestions = document.getElementById("suggestions");
  var bottom = document.querySelector(".search-box .bottom");
  var searchBoxDiv = document.querySelector(".search-box");
  var searchButtons = document.querySelector(".search-buttons");
  suggestions.innerHTML = '';
  bottom.style.display = 'none';
  searchBoxDiv.style.borderBottomLeftRadius = "1.5em";
  searchBoxDiv.style.borderBottomRightRadius = "1.5em";
  searchButtons.style.opacity = '1';
  searchButtons.style.pointerEvents = 'all';
}

function updateSuggestions() {
  var suggestions = document.getElementById("suggestions");
  var query = input.value;
  var searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>'
  var searchInputIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v0a5 5 0 0 0 5 5h4m8.124 4.119a3 3 0 1 0-4.248-4.237a3 3 0 0 0 4.248 4.237m0 0L22 21"/></svg>'
  var clipboardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2z"/></svg>'
  var clipboardTickIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2zm.5 6.5L9 12l2 2l4.5-4.5L17 11l-6 6z"/></svg>'
  var bottom = document.querySelector(".search-box .bottom")
  var searchBoxDiv = document.querySelector(".search-box");
  var searchButtons = document.querySelector(".search-buttons");
  if (query.length > 0) {
    getGoogleSuggestions(query).then(suggestionsList => {
      suggestions.innerHTML = '';
      bottom.style.display = 'block';
      suggestionsList.forEach(suggestion => {
        var div = document.createElement('div');
        div.className = 'suggestion';
        var searchPart = document.createElement('div');
        searchPart.className = 'searchPart';
        searchPart.addEventListener('click', () => {
          input.value = suggestion;
          search(suggestion);
        });
        var iconDiv = document.createElement('div');
        iconDiv.className = 'suggestionIcon';
        iconDiv.innerHTML = searchIcon;
        searchPart.appendChild(iconDiv)
        var inputIconDiv = document.createElement('div');
        inputIconDiv.className = 'suggestionInputIcon';
        inputIconDiv.innerHTML = searchInputIcon;
        inputIconDiv.addEventListener('click', () => {
          input.value = suggestion;
        });
        var clipboardIconDiv = document.createElement('div');
        clipboardIconDiv.className = 'suggestionClipboardIcon';
        clipboardIconDiv.innerHTML = clipboardIcon;
        clipboardIconDiv.addEventListener('click', () => {
          navigator.clipboard.writeText(suggestion);
          clipboardIconDiv.innerHTML = clipboardTickIcon;
          setTimeout(() => {
            clipboardIconDiv.innerHTML = clipboardIcon;
          }, 1500);
        });
        var textDiv = document.createElement('div');
        textDiv.className = 'suggestionText';
        textDiv.innerHTML = suggestion;
        searchPart.appendChild(textDiv);
        div.appendChild(searchPart);
        div.appendChild(clipboardIconDiv);
        div.appendChild(inputIconDiv);
        suggestions.appendChild(div);
        var searchBox = document.getElementById("searchBox");
        var rect = searchBox.getBoundingClientRect();
        suggestions.style.left = rect.left + "px";
        suggestions.style.top = rect.bottom + "px";
        searchBoxDiv.style.borderBottomLeftRadius = "0";
        searchBoxDiv.style.borderBottomRightRadius = "0";
        searchButtons.style.opacity = '0';
        searchButtons.style.pointerEvents = 'none';
      });
    });
  } else {
    resetSuggestions();
  }
}

async function getGoogleSuggestions(query) {
  var suggestions = []
  var response = await fetch("/complete/search?q=" + query)
  var json = await response.json()
  return json[1].slice(0, 10)
}

fetch("/static/tlds.json")
  .then(response => response.json())
  .then(data => tlds = data);

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let query = input.value;
    if (query.length === 0) {
      return;
    }
    search(query);
  }
});

function updateEngineIcon() {
  var text = input.value;
  var usedEngine = null;
  for (let engine in engines) {
    if (text.endsWith(" " + engine)) {
      usedEngine = engine;
      break;
    }
  }
  var searchEngineIcon = document.getElementById("searchEngineIcon");
  if (usedEngine) {
    searchEngineIcon.innerHTML = engines[usedEngine][1];
  } else {
    searchEngineIcon.innerHTML = engines["!g"][1];
  }
}

input.addEventListener("input", function(event) {
  updateEngineIcon();
  updateSuggestions();
  // var input = document.getElementById("searchBox");
  // var clearButton = document.getElementById("clearButton");
  // if (input.value.length > 0) {
    // clearButton.style.display = "block";
  // } else {
    // clearButton.style.display = "none";
  // }
});

var body = document.querySelector("body");
body.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "a") {
    input.select();
  }
});

window.addEventListener("click", function() {
  input.focus();
});

var searchEngineIcon = document.getElementById("searchEngineIcon");

searchEngineIcon.addEventListener("click", function() {
  var engineDropdown = document.getElementById("engineDropdown");
  engineDropdown.classList.toggle("hidden");
  var searchEngineIcon = document.getElementById("searchEngineIcon");
  var rect = searchEngineIcon.getBoundingClientRect();
  engineDropdown.style.left = rect.left + "px";
  engineDropdown.style.top = rect.bottom + "px";
  var aiDropdown = document.getElementById("aiDropdown");
  if (!aiDropdown.classList.contains("hidden")) {
    aiDropdown.classList.add("hidden");
  }
});

var aiDropdownButton = document.getElementById("aiDropdownButton");

aiDropdownButton.addEventListener("click", function() {
  var aiDropdown = document.getElementById("aiDropdown");
  aiDropdown.classList.toggle("hidden");
  var aiDropdownButton = document.getElementById("aiDropdownButton");
  var rect = aiDropdownButton.getBoundingClientRect();
  aiDropdown.style.left = rect.left + "px";
  aiDropdown.style.top = rect.bottom + "px";
  var engineDropdown = document.getElementById("engineDropdown");
  if (!engineDropdown.classList.contains("hidden")) {
    engineDropdown.classList.add("hidden");
  }
});

function addToEnd(text) {
  var input = document.getElementById("searchBox");
  var inputEmpty = input.value.length === 0;
  text = " " + bangCharacter + text;
  if (!input.value.endsWith(text)) {
    input.value += text;
    input.selectionStart = input.selectionEnd = input.value.length - text.length;
  }
  var aiDropdown = document.getElementById("aiDropdown");
  var engineDropdown = document.getElementById("engineDropdown");
  if (!aiDropdown.classList.contains("hidden")) {
    aiDropdown.classList.add("hidden");
  }
  if (!engineDropdown.classList.contains("hidden")) {
    engineDropdown.classList.add("hidden");
  }
  updateEngineIcon();
  if (!inputEmpty) {
    search(input.value);
  }
}

function gLogo() {
  var mainTitle = document.getElementById("mainTitle");
  mainTitle.classList.toggle("g");
}

const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
  'KeyB', 'KeyA'
];

let inputSequence = [];

document.addEventListener('keydown', (event) => {
  inputSequence.push(event.code);
  
  if (inputSequence.length > konamiCode.length) {
    inputSequence.shift(); // Keep only the last N inputs
  }

  if (inputSequence.join('') === konamiCode.join('')) {
    gLogo();
    inputSequence = []; // Reset after activation
  }
});

let list = [
  "Life moves pretty fast",
  "Think fourth-dimensionally",
  "Not FDA approved",
  "Never Gonna Give You Up",
  "Doesn't support Windows Me",
  "Not made for Windows CE",
  "Should I stay or should I go?",
  "We didn't start the fire",
  "A considerably large nudge",
  "Wake up and smell the ashes",
  "Only on GameCube",
  "This is heavy...",
  "Great Scott",
  "Tougher than diamonds, Rich like cream",
  "Don't need money, don't take fame",
  "Don't need no credit card to ride this train",
  "Strong and sudden",
  "Lightning never strikes twice",
  "Is this the 50s? or 1999",
  "Future's Made of Virtual Insanity",
  "99 Red Balloons",
  "As Seen on TV",
  "Caretakers care so you don't have to",
  "Up to 4 Players",
  "Double Dash!",
  "Chibi-Robo: Zip Lash",
  "Password is Joshua",
  "Here Come the Drums 👌",
  "ZERO bugs",
  "Recommended by 9/10 Dentists",
  "It was the Doctor all the time",
  "The right man in the wrong place can make all the difference...",
  "Better than Virtua Fighter",
  "Wild MISSINGNO. Appeared",
  "Oracle vs Sun Microsystems - who would win?",
  "Not endorsed by thouky.co.uk",
  "Always give yourself 2 ways to win",
  "Love grows where my Rosemary goes",
  "Tell me Sweet Little Lies",
  "There are literally DOZENS of us",
  "Don't want no Cap'n Crunch or Raisin Bran",
  "Your brain gets smart but your head gets dumb",
  "There is a light that never goes out",
  "Insatiable You",
  "Tapping the phones like, yeah",
  "You're gonna be OK",
  "Designed for 2000\" TVs",
  "Stop rn, tyvm",
  "Like an onion. Onions have layers, this has layers.",
  "This is just a tribute.",
  "Please don't try The Konami Code",
];

var splash = document.getElementById("splash");
var terminator = "";
var splashChoice = list[Math.floor(Math.random() * list.length)]
if (!(splashChoice.endsWith("?") || splashChoice.endsWith("."))) {
  terminator = "!";
}
splash.innerHTML = splashChoice + terminator;

var settingsButton = document.getElementById("settingsButton")
var settingsModal = document.getElementById("settingsModal")
settingsButton.addEventListener("click", function() {
  if (settingsModal.style.opacity == 0) {
    settingsModal.style.opacity = 1;
  } else {
    settingsModal.style.opacity = 0;
  }
  if (settingsModal.style.pointerEvents == "none") {
    settingsModal.style.pointerEvents = "all";
  } else {
    settingsModal.style.pointerEvents = "none";
  }
});
