# -*- mode: ruby -*-
# vi: set ft=ruby :
class VagrantPlugins::ProviderVirtualBox::Action::Network
    def dhcp_server_matches_config?(dhcp_server, config)
      true
    end
  end
  
  Vagrant.configure("2") do |config|
  
    # Configuración de la primera máquina virtual
    config.vm.define "web1" do |web1|
      web1.vm.box = "ubuntu/jammy64"  # Box Ubuntu 18.04 LTS
      web1.vm.hostname = "web-final"
      web1.vm.network "private_network", ip: "192.168.56.2"
      web1.vm.provider "virtualbox" do |vb|
        vb.memory = "512"  # Configurar la memoria según sea necesario
        # vb.gui = true
      end

    end
  end