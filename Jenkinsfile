pipeline {
    agent any
    
    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
     stage('Build') {
           steps {
               bat 'npm run build'
               echo "Deliver completed"
           }
    }
        stage('Start server') {
            steps {
                script {
                    bat 'npm start'
                    echo "Server started"
                    echo "Server URL: http://localhost:4200"
                    input(message: "Click 'Proceed' to open the server URL in a new tab", ok: "Proceed")
                }
            }
        }

        stage('Stop server') {
            steps {
                script {
                    bat 'taskkill /F /IM node.exe'
                    echo "Server stopped"
                    sleep time: 5 * 60, unit: 'SECONDS' // Server runs for 5 minutes before stopping
                }
            }
        }
    }     
      
  post {
        always {
            script {
                if (currentBuild.result == 'SUCCESS') {
                    emailext body: 'Jenkins job has completed successfully.',
                            subject: 'Jenkins job succeeded',
                            to: 'shettynidhu111@gmail.com, shettynidhu123@gmail.com'
                } else {
                    emailext body: 'Jenkins job has failed.',
                            subject: 'Jenkins job failed',
                            to: 'shettynidhu111@gmail.com, shettynidhu123@gmail.com'
                }
            }
        }
    }


}
