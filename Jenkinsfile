pipeline {
    agent any

    stages {
        stage('Preparación') {
            steps {
                echo 'Iniciando verificación de entorno...'
                sh 'docker-compose --version'
            }
        }
        stage('Despliegue de Servicios') {
            steps {
                echo 'Levantando apache_web y alpine_tester...'
                sh 'docker-compose up -d web_server tester_client'
            }
        }
        stage('Validación') {
            steps {
                echo 'Verificando los logs para confirmar el Ping exitoso...'
                sh 'sleep 10'
                sh 'docker logs alpine_tester'
            }
        }
    }
}