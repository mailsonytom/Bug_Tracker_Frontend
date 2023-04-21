pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
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
                        bash './jenkins/scripts/test.sh'
                    }
                }
                stage('Deliver') {
                            steps {
                                bash './jenkins/scripts/deliver.sh'
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                bash './jenkins/scripts/kill.sh'
                            }
                        }
    }

}

