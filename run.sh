cd app && ./mvnw clean package -DskipTests && cp target/app-0.0.1-SNAPSHOT.jar ./app.jar && cd ..

docker-compose up --build -d
