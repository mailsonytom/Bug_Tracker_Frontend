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
                timeout(time: 20, unit: 'MINUTES') {
                bat 'npm start'
            }
        }
        }
        stage('Build') {
           steps {
               bat 'npm run build'
               echo "Deliver completed"
      }
    }
        
  

    }

}
