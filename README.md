# eks-api

Production-ready EKS API deployment with GitOps.

## Stack
- AWS EKS
- Docker + Amazon ECR
- ingress-nginx (NLB)
- GitHub Actions (OIDC)
- Argo CD (GitOps)

## Flow
GitHub push → GitHub Actions build & push to ECR → Argo CD auto-sync → EKS

## How it works
- Application manifests are stored in `k8s/`
- Argo CD watches the repository and automatically deploys changes
- ingress-nginx exposes the service via public NLB

## Status
✅ Production ready  
✅ Auto-sync enabled  
✅ Healthy
