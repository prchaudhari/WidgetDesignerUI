import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Widget } from '../../models/widget.model';
import { WidgetService } from '../../services/widget.service';

@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.css']
})
export class AddWidgetComponent {
  ckeditorContent: any;
  newWidget: Widget = {
    id: 0,
    widgetName: '',
    description: '',
    dataSourceJson: '',
    WidgetHtml: '',
    widgetCSS: '',
    widgetCSSUrl: '',
    widgetIcon: '',
    width: 0,
    height: 0,
  };

  constructor(
    private widgetService: WidgetService,
    private router: Router
  ) { }

  addWidget() {
    this.widgetService.addWidget(this.newWidget).subscribe({
      next: (widget) => {
        this.router.navigate(['widget']);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }


  ShowPreview() {
    alert("Widget Preview");
  }
}
