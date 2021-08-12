DATE=$(date +%Y%m%d%H%M%S)

{
  cd android && ./gradlew assembleRelease
} || {
  cd ..
  exit
}

cd ..

cp android/app/build/outputs/apk/release/app-release.apk ipost-$DATE.apk

echo "\nipost-${DATE}.apk generated!\n"