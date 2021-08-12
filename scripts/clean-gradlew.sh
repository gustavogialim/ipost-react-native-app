{
  cd android && ./gradlew clean
} || {
  cd ..
  exit
}

cd ..

echo "\nGradlew successfully cleaned!\n"