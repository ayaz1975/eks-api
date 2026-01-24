# eks-api

Production-ready EKS API deployment with GitOps.

## Stack
- AWS EKS
- Docker + Amazon ECR
- ingress-nginx (NLB)
- GitHub Actions (OIDC)
- Argo CD (GitOps)
- cert-manager + Let’s Encrypt (HTTPS)

## Flow
GitHub push → GitHub Actions build & push to ECR → Argo CD auto-sync → EKS

## How it works
- Application manifests are stored in `k8s/`
- Argo CD watches the repository and automatically deploys changes
- ingress-nginx exposes the service via public NLB
- HTTPS is provided via cert-manager and Let’s Encrypt (HTTP-01)

## HTTPS
- TLS termination at ingress-nginx
- Let’s Encrypt ClusterIssuer (`letsencrypt-prod`)
- Automatic certificate renewal
- Note: small nodegroups may require scaling to allow ACME solver pods

## Status
✅ Production ready  
✅ Auto-sync enabled  
✅ Healthy
????
