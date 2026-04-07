export type ProjectCategory = "devops" | "blockchain";

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  category: ProjectCategory;
  image: string;
  githubUrl: string; // ✅ add this
};

export const projects: Project[] = [
    // Blockchain
  {
    title: "DaanDapp — Decentralized Application",
    desc: "Smart contract integration, wallet connectivity, secure transaction flow.",
    tags: ["Solidity", "Web3", "MetaMask"],
    category: "blockchain",
    // image: "/assets/bg/bg.png",
    image: "/assets/project/daan.png",
    githubUrl: "https://github.com/coderDangi190/Daan_dapp", // ✅
  },
  
  {
    title: "CI/CD Pipeline for Production App",
    desc: "Build → Test → Deploy using GitHub Actions / GitLab CI.",
    tags: ["GitHub Actions", "Docker", "CI/CD"],
    category: "devops",
    image: "/assets/project/pipeline.png",
    githubUrl: "https://github.com/coderDangi190/Daan_dapp/actions/runs/22526858567/job/65260204919", // ✅
  },
  {
    title: "Kubernetes Deployment + Ingress Setup",
    desc: "Scalable K8s cluster deployment with NGINX ingress.",
    tags: ["Kubernetes", "Docker"],
    category: "devops",
    image: "/assets/project/kuber1.png",
    githubUrl: "https://github.com/yourname/k8s-ingress", // ✅
  },
  {
    title: "Terraform AWS Infrastructure",
    desc: "IaC setup for scalable AWS resources.",
    tags: ["Terraform", "AWS"],
    category: "devops",
    image: "/assets/project/terra.png",
    githubUrl: "https://github.com/yourname/terraform-aws", // ✅
  },
  {
    title: "Monitoring Stack (Prometheus + Grafana)",
    desc: "Monitoring system for metrics and logs.",
    tags: ["Prometheus", "Grafana"],
    category: "devops",
    image: "/assets/project/moni.png",
    githubUrl: "https://github.com/yourname/monitoring-stack", // ✅
  },


];
