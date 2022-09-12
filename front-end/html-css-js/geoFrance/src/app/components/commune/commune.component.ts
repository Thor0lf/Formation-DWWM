import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Commune } from 'src/app/models/commune.model';
import { Departement } from 'src/app/models/departement.model';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {

  departements: Departement[] = []; // J'initialise un tableau vide pour stocker les données d'une API
  departementsIsLoading: boolean = false; // Définir le chargement des informations
  departementsIsLoaded: boolean = false; // Si les chargements sont chargés

  communes: Commune[] = [];
  communesForGraph: { // J'initialise un tableau vide pour les graphes
    name: string,
    value: number } [] = [];
  communesIsLoading: boolean = true;
  communesIsLoaded: boolean = true;

  // Pour réaliser un GET, je dois déclarer en PRIVATE le service HttpClient
  constructor(private HttpClient: HttpClient, private toastr: ToastrService) { }

  /**
   * Fonction qui permet le chargement des départements
   */
  loadDepartement(): void { // VOID car pas besoin de return
    this.departementsIsLoading = true; // Permet de gérer l'état du spinner de chargement
    this.toastr.success('Liste des départements chargée', 'Chargement terminé')
    this.HttpClient.get<Departement[]>('https://geo.api.gouv.fr/departements')// Récupération des données du Web Service grâce à une requête GET
    .subscribe(data => { // On doit souscrire aux informations de l'API
      this.departements = data; // Je transfère les données dans mon tableau vide
      this.departementsIsLoaded = true; // Le bouton de chargement disparait
      this.departementsIsLoading = false; // Une fois les données chargées, le chargement passe à FALSE
    })
  }

  loadCommunes(codeDepartement: string): void {
    this.communesIsLoading = true;
    this.HttpClient.get<Commune[]>(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`)
    .subscribe(data => {
      this.communes = data;
      this.communesForGraph = data // Récupération des données pour les graphes
      .filter(commune => commune.population > 5000)
      .map(commune => {
        return {
          name: commune.nom,
          value: commune.population
        }
      });
      this.communesIsLoaded = true;
      this.toastr.success('Liste des communes chargée', 'Chargement terminé')
      this.communesIsLoading = false;
    })
  }
  ngOnInit(): void {}
}
