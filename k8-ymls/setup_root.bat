docker build -t micro-root:latest -f .\docker\Dockerfile .
kubectl create -f k8-ymls\deploy-root.yml -n dev 
kubectl create -f k8-ymls\k8-main-ingress.yml -n dev
kubectl create -f k8-ymls\k8-micro-root_svc.yml -n dev
