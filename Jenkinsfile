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
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        bat 'npm test'
                        echo "Tests passed"
                    }
                }
            }
        }
        stage('Deliver') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                        bat 'npm run build'
                        bat 'npm start'
                        input message: 'Finished using the web site? (Click "Proceed" to continue)'
                        bat 'taskkill /IM node.exe /F'
                        echo "Deliver stage completed successfully"
                    }
                }
            }
        }
    }
}
