pipeline {
    agent any
    
    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
   

            }
        }
        
        
        stage('Start server') {
            steps {
                bat 'start npm start'
            }
        }
    
  

    }

}
