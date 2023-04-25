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
                bat 'npm start'
            }
        }  
  

    }

}
