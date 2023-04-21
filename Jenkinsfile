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
                timeout(time: 10, unit: 'MINUTES') {
                    bat 'npm test'
                }
            }
        }
        
    }
}
