import { Component, OnInit } from '@angular/core';
import { VetTimelineComponent } from "../../components/vet-timeline/vet-timeline.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [VetTimelineComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {

  animalId: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.animalId = this.route.snapshot.paramMap.get("id")!;
    console.log(this.animalId);
  }

}
