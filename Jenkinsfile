pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                timeout(time: 6, unit: 'MINUTES') {
                    bat 'npm test'
                }
            }
            post {
                always {
                    echo 'Test stage completed'
                }
            }
        }
        stage('Deliver') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    bat 'npm run build'
                    bat 'npm start'
                    input message: 'Finished using the web site? (Click "Proceed" to continue)'
                    bat 'taskkill /IM node.exe /F'
                }
            }
        }
    }
}
