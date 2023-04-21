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
                    try {
                        bat 'npm test'
                    } catch (error) {
                        echo "test failed, but continuing to Deliver stage"
                    }
                }
            }
        }
        stage('Deliver') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    try {
                        bat 'npm run build'
                        bat 'npm start'
                        input message: 'Finished using the web site? (Click "Proceed" to continue)'
                        bat 'taskkill /IM node.exe /F'
                    } catch (error) {
                        echo "Deliver failed due to error: ${error}"
                    }
                }
            }
        }
    }
}
