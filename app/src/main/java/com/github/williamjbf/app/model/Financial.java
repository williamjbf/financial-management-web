package com.github.williamjbf.app.model;

import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.geom.Point;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@SequenceGenerator(name = "seq_financial", initialValue = 1,allocationSize = 1)
public class Financial implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_financial")
    private long id;
    private String name;
    private double value;
    private Geometry point;
    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "type_id", referencedColumnName = "id")
    private TypeFinancial type;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private CategoryFinancial category;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public Geometry getPoint() {
        return point;
    }

    public void setPoint(Geometry point) {
        this.point = point;
    }

    public TypeFinancial getType() {
        return type;
    }

    public void setType(TypeFinancial type) {
        this.type = type;
    }

    public CategoryFinancial getCategory() {
        return category;
    }

    public void setCategory(CategoryFinancial category) {
        this.category = category;
    }
}
