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
                    bat 'start /B cmd /C "npm start"'
                    echo "Server URL: http://localhost:4200"
                    input(message: "Click 'Proceed' to stop the server", ok: "Proceed")
                }
            }
        }

        stage('Stop server') {
            steps {
                script {
                   bat 'wmic process where "name=\'node.exe\'" delete'
                    echo "Server stopped"
                    sleep time: 1 * 60, unit: 'SECONDS' // Server runs for 5 minutes before stopping
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
                            to: 'shettynidhu111@gmail.com, shettynidhu123@gmail.com, johncena1997788@gmail.com'
                } else {
                    emailext body: 'Jenkins job has failed.',
                            subject: 'Jenkins job failed',
                            to: 'shettynidhu111@gmail.com, shettynidhu123@gmail.com, johncena1997788@gmail.com'
                }
            }
        }
    }


}
