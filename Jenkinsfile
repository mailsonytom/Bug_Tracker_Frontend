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
                timeout(time: 5, unit: 'MINUTES') {
                bat 'npm start'
            }
        }
     }
    }     
      
  post {
        always {
            emailext body: 'Jenkins job has completed.',
            subject: 'Jenkins job completed',
            to: 'shettynidhu111@gmail.com'
        }
    }


}
