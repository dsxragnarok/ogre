# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty32"
  config.vm.network "forwarded_port", guest: 8080, host: 8080, auto_correct: true

  config.vm.synced_folder "./", "/vagrant", create: true

  config.vm.provision "shell" do |s|
    s.path = "provision/setup.sh"
  end
end
